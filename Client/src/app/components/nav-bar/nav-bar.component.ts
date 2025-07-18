// nav-bar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
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
  botoes: Botao[] = [
    {
      titulo: "O Troco",
      disabled: true,
      isLogo: true
    },
    {
      titulo: "Home",
      rota: "/home",
      disabled: false
    },
    {
      titulo: "Emissão",
      rota: "/emissoes",
      disabled: false
    },
    {
      titulo: "Categorias",
      rota: "/categoria",
      disabled: false
    },
  ];
}