import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../utils/material.module';

@Component({
  selector: 'app-botao-navegacao',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './botao-navegacao.component.html',
  styleUrl: './botao-navegacao.component.scss'
})
export class BotaoNavegacaoComponent {
  @Input() botao!: Botao;
}

export interface Botao {
  titulo: string;
  rota?: string | null;
  disabled: boolean;
  isLogo?: boolean;
}