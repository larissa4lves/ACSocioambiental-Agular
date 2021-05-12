import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService

  ) { }

  ngOnInit(){
    if(environment.token == '') {
      this.router.navigate(['/login']);
    }
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp:Categoria)=>{
      this.categoria = resp
    })
  }

  apagar(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(()=>{
      alert('Categoria apagada com sucesso!')
      this.router.navigate(['/categoria'])
    })
  }

}
