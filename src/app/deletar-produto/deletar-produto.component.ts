import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { produtoService } from '../service/produto.service';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  item: Produto = new Produto();
  idItem: number;

  constructor(
    private produtoS: produtoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/login']);
    }

    this.idItem = this.route.snapshot.params['id'];
    this.findByIdItem(this.idItem);

  }

  findByIdItem(id: number){
    this.produtoS.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.item = resp;

    })
  }

  apagar(){
    this.produtoS.deleteProduto(this.idItem).subscribe(()=>{
      alert('Produto apagado com sucesso!');

      this.router.navigate(['/produtos']);

    })
  }
}
