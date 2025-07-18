// src/app/shared/form-padrao/form-padrao.component.ts

import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Importe seu Módulo do Material aqui.
// Assumindo que você tem um MaterialModule que exporta todos os componentes necessários.

import { ApiService } from '../../core/api.service';
import { MaterialModule } from '../../utils/material.module';
import { FormConfig } from './form-config.interface';

@Component({
  selector: 'app-form-padrao',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule // Importa todos os componentes do Angular Material
  ],
  templateUrl: './form-padrao.component.html',
  styleUrls: ['./form-padrao.component.scss']
})
export class FormPadraoComponent<T extends { id: number | null | undefined }> implements OnInit, OnChanges {

  @Input({ required: true }) config!: FormConfig<T>;
  
  @Output() formSubmittedSuccess = new EventEmitter<T>();
  @Output() formDeletedSuccess = new EventEmitter<void>();
  @Output() formCancelled = new EventEmitter<void>();

  form!: FormGroup;
  isNew = true;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config'] && !changes['config'].firstChange) {
      this.initForm();
    }
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
        this.formSubmittedSuccess.emit(response as T);
      },
      error: (err) => {
        console.error('Erro ao salvar:', err);
      }
    });
  }

  onCancelOrDelete(): void {
    if (this.isNew) {
      // Se é um novo registro, apenas limpa o formulário
      this.form.reset();
      this.formCancelled.emit();
      console.log('Formulário limpo.');
    } else {
      // Se é um registro existente, executa a exclusão
      if (!this.config.deleteUrl) {
        console.error('URL de exclusão não fornecida!');
        return;
      }
      
      // Adicionar um diálogo de confirmação aqui é uma boa prática
      // window.confirm('Tem certeza que deseja excluir?');
      
      console.log('Enviando requisição DELETE para:', this.config.deleteUrl);
      this.apiService.delete(this.config.deleteUrl).subscribe({
        next: () => {
          console.log('Excluído com sucesso!');
          this.formDeletedSuccess.emit();
          this.form.reset();
        },
        error: (err) => {
          console.error('Erro ao excluir:', err);
          // Exibir notificação de erro
        }
      });
    }
  }
}
