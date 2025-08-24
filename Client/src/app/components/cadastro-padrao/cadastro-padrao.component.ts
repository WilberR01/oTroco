import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPadraoComponent } from '../form-padrao/form-padrao.component';
import { FormConfig } from '../form-padrao/form-config.interface';
import { ListagemPadraoComponent, ListItem } from '../listagem-padrao/listagem-padrao.component';

@Component({
  selector: 'app-pagina-cadastro',
  standalone: true,
  imports: [CommonModule, FormPadraoComponent, ListagemPadraoComponent],
  templateUrl: './cadastro-padrao.component.html',
  styleUrls: ['./cadastro-padrao.component.scss']
})
export class CadastroPadraoComponent<T extends { id: number | null | undefined}> {
  @Input({ required: true }) tituloPagina: string = 'Cadastro';
  @Input({ required: true }) formConfig!: FormConfig<T>;
  @Input({ required: true }) listItems: ListItem[] = [];

  @Output() itemSelecionado = new EventEmitter<T>();
  @Output() formSubmetido = new EventEmitter<T>();

  onItemSelecionadoNaLista(item: any = null): void {
    this.itemSelecionado.emit(item);
  }

  onItemNaoSelecionadoNaLista(): void {
    this.itemSelecionado.emit();
  }

  onFormSubmetidoComSucesso(itemSalvo: any): void {
    this.formSubmetido.emit(itemSalvo);
  }
}