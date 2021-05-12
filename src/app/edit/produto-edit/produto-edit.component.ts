import { produtoService } from './../../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto();

  categoria: Categoria = new Categoria();
  idCategoria: number;
  listaDeCategoria: Categoria[];

  constructor(
    private produtoService: produtoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.idCategoria = this.route.snapshot.params['id'];

    this.findByIdProduto(this.idCategoria);
    this.findoByAllCategoria();

  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;

    })

  }

  findoByAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaDeCategoria = resp;

    })

  }

  /* ATUALIZA UMA POSTAGEM NA BASE DE DADOS */
  atualizar() {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;

      alert('Postagem atualizada com sucesso!');

      this.router.navigate(['/produtos']);

    })

  }

}
