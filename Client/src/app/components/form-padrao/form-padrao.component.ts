// src/app/shared/form-padrao/form-padrao.component.ts

import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ApiService } from '../../core/api.service';
import { MaterialModule } from '../../utils/material.module';
import { FormConfig } from './form-config.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-padrao',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './form-padrao.component.html',
  styleUrls: ['./form-padrao.component.scss']
})
export class FormPadraoComponent<T extends { id: number | null | undefined }> implements OnInit {

  form!: FormGroup;
  isNew = true;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<FormPadraoComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public config: FormConfig<T>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    if (!this.config) return;

    this.form = this.fb.group({});
    this.isNew = this.config.model.id === 0 || this.config.model.id == null;

    this.config.fields.forEach(field => {
      const initialValue = (this.config.model as any)[field.key];
      const validators = field.required ? [Validators.required] : [];
      const desativado = field.disabled ? true : false;
      this.form.addControl(field.key, new FormControl({ value: initialValue, disabled: desativado }, validators));
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.error('Formulário inválido!');
      return;
    }

    const dataToSave: T = {
      ...this.config.model,
      ...this.form.value
    };

    if (this.isNew) {
        (dataToSave as any).id = 0;
    };

    console.log('Enviando dados para:', this.config.saveUrl, dataToSave);
    
    this.apiService.post(this.config.saveUrl, dataToSave).subscribe({
      next: (response) => {
        console.log('Salvo com sucesso!', response);
        this.dialogRef.close(response as T);
      },
      error: (err) => {
        console.error('Erro ao salvar:', err);
      }
    });
  }

  onCancelOrDelete(): void {
    if (this.isNew) {
      this.dialogRef.close();
    } else {
      if (!this.config.deleteUrl) {
        console.error('URL de exclusão não fornecida!');
        return;
      }

      if (window.confirm('Tem certeza que deseja excluir?')) {
        console.log('Enviando requisição DELETE para:', this.config.deleteUrl);
        this.apiService.delete(this.config.deleteUrl).subscribe({
          next: () => {
            console.log('Excluído com sucesso!');
            this.dialogRef.close({ deleted: true });
            this.form.reset();
          },
          error: (err) => {
            console.error('Erro ao excluir:', err);
          }
        });
      }
    }
  }
}
