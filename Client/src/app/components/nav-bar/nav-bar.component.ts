import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoNavegacaoComponent } from './botao-navegacao/botao-navegacao.component';
import { Botao } from './botao-navegacao/botao-navegacao.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    BotaoNavegacaoComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() botoes!: Botao[];
}