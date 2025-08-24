import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../utils/material.module';

export interface ListItem {
  id: number | string;
  titulo: string;
  campos: { [key: string]: string | number };
  payload: any; 
}

@Component({
  selector: 'app-listagem-padrao',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './listagem-padrao.component.html',
  styleUrls: ['./listagem-padrao.component.scss']
})
export class ListagemPadraoComponent {
  @Input() items: ListItem[] = [];
  @Output() itemSelecionado = new EventEmitter<any>();

  idItemSelecionado: number | null = null;
  get temItemSelecionado(): boolean {
    return this.idItemSelecionado != null;
  }


  getCamposArray(campos: { [key: string]: string | number }): { key: string, value: string | number }[] {
    return Object.keys(campos).map(key => ({ key, value: campos[key] }));
  }

  onItemClick(itemPayload: any): void {
    
    if (this.idItemSelecionado && itemPayload.id === this.idItemSelecionado) {
      this.idItemSelecionado = null;
      this.itemSelecionado.emit();
    }
    else {
      this.idItemSelecionado = itemPayload.id;
      this.itemSelecionado.emit(itemPayload);
    }
  }
}
