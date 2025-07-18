import { Component } from '@angular/core';
import { MaterialModule } from './utils/material.module';
import { FormPadraoComponent } from './components/form-padrao/form-padrao.component';
import { FormConfig } from './components/form-padrao/form-config.interface';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

interface User {
  id: number | null;
}

interface Categoria {
  id: number | null;
  nome: string;
  descricao: string;
  ativo: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MaterialModule, FormPadraoComponent, NavBarComponent]
})
export class AppComponent {

  FormCategoria: FormConfig<Categoria> = {
    title: 'Cadastrar Categoria',
    model: {
      id: null,
      nome: '',
      descricao: '',
      ativo: true
    },
    fields: [
      { key: 'ativo', label: 'Ativo', type: 'toggle', disabled: true },
      { key: 'nome', label: 'Nome', type: 'text', required: true },
      { key: 'descricao', label: 'Descrição', type: 'text' }
    ],
    saveUrl: 'https://localhost:7023/categoria',
    deleteUrl: '/categoria/delete'
  };
  
  onUserSaved(user: User) {
    console.log('Evento recebido do componente filho: Usuário salvo!', user);
    // Aqui você pode, por exemplo, atualizar uma lista de usuários na tela.
  }

  onUserDeleted() {
    console.log('Evento recebido do componente filho: Usuário excluído!');
    // Aqui você pode, por exemplo, remover o usuário da lista na tela.
  }
}
