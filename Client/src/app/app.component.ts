import { Component } from '@angular/core';
import { MaterialModule } from './utils/material.module';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';
import { Botao } from './components/nav-bar/botao-navegacao/botao-navegacao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MaterialModule, NavBarComponent, RouterOutlet]
})
export class AppComponent {

  botoes: Botao[] = [
    {
      titulo: "O Troco",
      disabled: true,
      isLogo: true
    },
    {
      titulo: "Home",
      rota: "home",
      disabled: false,
      icone: true
    },
    {
      titulo: "Emissão",
      rota: "emissoes",
      disabled: false
    },
    {
      titulo: "Cadastros",
      opcoes: [
        {
          titulo: "Categorias",
          rota: "categorias",
          disabled: false
        },
        {
          titulo: "Produtos",
          rota: "produtos",
          disabled: false
        },
        {
          titulo: "Vendedores",
          rota: "vendedores",
          disabled: false
        }
      ],
      disabled: false
    },
  ];

  constructor(){

  }
}
