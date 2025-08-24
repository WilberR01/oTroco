import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ComandaData {
  id: number;
  titulo: string;
  valorTotal: number;
  quantidadeTrocas: number;
  status: 'aberta' | 'fechada';
}

@Component({
  selector: 'app-comanda-card',
  templateUrl: './card-comanda.component.html',
  styleUrls: ['./card-comanda.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ComandaCardComponent {
  @Input() comanda!: ComandaData;
  @Input() minimizado: boolean = false;

  onAdicionarTroca() {
    console.log('Adicionar troca na comanda:', this.comanda.id);
  }

  onEncerrarComanda() {
    console.log('Encerrar comanda:', this.comanda.id);
  }

  onEmitirComanda() {
    console.log('Emitir comanda:', this.comanda.id);
  }
}
