import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../utils/material.module';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao-navegacao',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ],
  templateUrl: './botao-navegacao.component.html',
  styleUrl: './botao-navegacao.component.scss'
})
export class BotaoNavegacaoComponent {
  @Input() botao!: Botao;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;

  expandido: boolean = false;
  cafe = faCoffee;

  constructor(
    public navegador: Router,
  ){

  }

  navegue(botao: Botao){
    let rota = botao.rota;

    if (rota){
      this.navegador.navigate([rota]);
    }
    else if (botao.opcoes){
      if (this.trigger)
        this.trigger.openMenu();
    }
  }
}


export interface Botao {
  titulo: string;
  rota?: string | null;
  disabled: boolean;
  isLogo?: boolean;
  opcoes?: SubBotao[] | null;
  icone?: boolean;
}
export interface SubBotao {
  titulo: string;
  rota?: string | null;
  disabled: boolean;
}