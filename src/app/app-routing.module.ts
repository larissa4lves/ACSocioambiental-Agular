import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';

import { ProdutoComponent } from './produto/produto.component';
import { CadastarProdutoComponent } from './cadastar-produto/cadastar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'item', component: ItemComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'cadastar-produto/:id', component: CadastarProdutoComponent},
  {path: 'deletar-produto/:id', component: DeletarProdutoComponent},
  {path: 'produtos', component: ProdutoComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'comprar-item/:id', component: ItemComponent},
  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'categoria-delete/:id', component: DeleteCategoriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
