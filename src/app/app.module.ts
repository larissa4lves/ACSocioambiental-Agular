import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { SobreComponent } from './sobre/sobre.component';
>>>>>>> 163e6bd5b2ba45958c65e14132d1d236628f737b
=======
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { ItemComponent } from './item/item.component';
import { CadastarProdutoComponent } from './cadastar-produto/cadastar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';

import { SobreComponent } from './sobre/sobre.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
>>>>>>> 6ba19d3a55b79d2e591d8c4e2c10de51a9735364

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
<<<<<<< HEAD
    SobreComponent
=======
    HomeComponent,
    ProdutoComponent,
    ItemComponent,
    CadastarProdutoComponent,
    DeletarProdutoComponent,
    CategoriaComponent,
    SobreComponent,
    ProdutoEditComponent,
    CategoriaEditComponent,
    DeleteCategoriaComponent
>>>>>>> 6ba19d3a55b79d2e591d8c4e2c10de51a9735364
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
