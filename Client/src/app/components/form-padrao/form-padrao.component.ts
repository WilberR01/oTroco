/* =============================================================================
    ARQUIVO: form-padrao.component.ts (Versão Corrigida e Versátil)
    DESCRIÇÃO: Este componente agora funciona tanto dentro de um MatDialog
               quanto diretamente em um template de página.
   ============================================================================= */

import { Component, Input, OnInit, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApiService } from '../../core/api.service';
import { MaterialModule } from '../../utils/material.module';
import { FormConfig } from './form-config.interface';

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

  @Input() config?: FormConfig<T>;
  
  @Output() formSubmittedSuccess = new EventEmitter<T>();
  @Output() formDeletedSuccess = new EventEmitter<void>();
  @Output() formCancelled = new EventEmitter<void>();

  form!: FormGroup;
  isNew = true;
  activeConfig!: FormConfig<T>;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Optional() private dialogRef: MatDialogRef<FormPadraoComponent<T>>,
    @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: FormConfig<T>
  ) {}

  ngOnInit(): void {
    this.activeConfig = this.dialogData || this.config!;
    if (!this.activeConfig) {
      console.error("FormPadraoComponent: Nenhuma configuração (config) foi fornecida.");
      return;
    }
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({});
    this.isNew = this.activeConfig.model.id === 0 || this.activeConfig.model.id == null;

    this.activeConfig.fields.forEach(field => {
      const initialValue = (this.activeConfig.model as any)[field.key];
      const validators = field.required ? [Validators.required] : [];
      const desativado = field.disabled ? true : false;
      this.form.addControl(field.key, new FormControl({ value: initialValue, disabled: desativado }, validators));
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const dataToSave: T = { ...this.activeConfig.model, ...this.form.value };
    if (this.isNew) { (dataToSave as any).id = 0; }

    this.apiService.post(this.activeConfig.saveUrl, dataToSave).subscribe({
      next: (response) => {
        if (this.dialogRef) {
          this.dialogRef.close(response as T);
        } else {
          this.formSubmittedSuccess.emit(response as T);
        }
      },
      error: (err) => console.error('Erro ao salvar:', err)
    });
  }

  onCancelOrDelete(): void {
    if (this.isNew) {
      this.form.reset();
      if (this.dialogRef) {
        this.dialogRef.close();
      } else {
        this.formCancelled.emit();
      }
    } else {
      if (!this.activeConfig.deleteUrl) return;
      
      this.apiService.delete(this.activeConfig.deleteUrl).subscribe({
        next: () => {
          if (this.dialogRef) {
            this.dialogRef.close({ deleted: true });
          } else {
            this.formDeletedSuccess.emit();
          }
          this.form.reset();
        },
        error: (err) => console.error('Erro ao excluir:', err)
      });
    }
  }
}
