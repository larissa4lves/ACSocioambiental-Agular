import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoComponent } from '../produto/produto.component';
import { Produto } from "../model/Produto"
import { produtoService } from '../service/produto.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Produto = new Produto()
  listaItens: Produto[]
  idItem: number;
  constructor(
    private router: Router,
    private produtoS: produtoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/login']);

    }

    this.idItem = this.route.snapshot.params['id']

    this.findAllItem();
    this.findByIdTema(this.idItem);
}

findAllItem(){
  this.produtoS.getAllProduto().subscribe((resp: Produto[]) => {
    this.listaItens = resp;

  })
}

findByIdTema(id: number) {
  this.produtoS.getByIdProduto(id).subscribe((resp: Produto) => {
    this.item = resp;

  })

}

cadastrar(){
    this.produtoS.postProduto(this.item).subscribe((resp: Produto) => {
      this.item = resp;

      alert('Produto cadastrado com sucesso!')

      this.findAllItem()
      this.item = new Produto()

    })
  }

}
