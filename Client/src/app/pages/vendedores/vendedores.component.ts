import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPadraoComponent } from '../../components/cadastro-padrao/cadastro-padrao.component';
import { FormConfig } from '../../components/form-padrao/form-config.interface';
import { ListItem } from '../../components/listagem-padrao/listagem-padrao.component';

interface Vendedor {
  id: number;
  nome: string;
  comissao: number;
  ativo: boolean;
}

@Component({
  selector: 'app-vendedores',
  standalone: true,
  imports: [
    CommonModule, 
    CadastroPadraoComponent
  ],
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss']
})
export class VendedoresComponent implements OnInit {

  vendedores: Vendedor[] = [];
  vendedoresListItems: ListItem[] = [];
  formConfig!: FormConfig<Vendedor>;

  ngOnInit(): void {
    this.carregarVendedores();
    this.criarConfigFormulario();
  }

  carregarVendedores(): void {
    this.vendedores = [
      { id: 1, nome: 'João da Silva', comissao: 5.5, ativo: true },
      { id: 2, nome: 'Maria Oliveira', comissao: 6.0, ativo: false },
      { id: 3, nome: 'Pedro Martins', comissao: 5.0, ativo: true },
    ];
    this.atualizarListaFormatada();
  }

  atualizarListaFormatada(): void {
    this.vendedoresListItems = this.vendedores.map(v => ({
      id: v.id,
      titulo: v.nome,
      campos: {
        'Comissão (%)': v.comissao.toFixed(2),
        'Status': v.ativo ? 'Ativo' : 'Inativo'
      },
      payload: v
    }));
  }

  criarConfigFormulario(vendedor?: Vendedor): void {
    const isNew = !vendedor;
    const modelPadrao: Vendedor = { id: 0, nome: '', comissao: 0, ativo: true };

    this.formConfig = {
      title: isNew ? 'Novo Vendedor' : 'Editar Vendedor',
      saveUrl: '/api/vendedores',
      deleteUrl: isNew ? undefined : `/api/vendedores/${vendedor.id}`,
      model: vendedor || modelPadrao,
      fields: [
        { key: 'nome', label: 'Nome Completo', type: 'text', required: true },
        { key: 'comissao', label: 'Comissão (%)', type: 'number', required: true },
        { key: 'ativo', label: 'Ativo', type: 'toggle' }
      ]
    };
  }

  onVendedorSelecionado(vendedor: Vendedor): void {
    this.criarConfigFormulario(vendedor);
  }

  onFormularioSubmetido(vendedorSalvo: Vendedor): void {
    this.carregarVendedores();
    this.criarConfigFormulario();
  }
}
