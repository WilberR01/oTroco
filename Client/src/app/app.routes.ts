import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { VendedoresComponent } from './pages/vendedores/vendedores.component';
import { EmissoesComponent } from './pages/emissoes/emissoes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'emissoes', component: EmissoesComponent },
    { path: 'categorias', component: CategoriasComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'vendedores', component: VendedoresComponent},
];
