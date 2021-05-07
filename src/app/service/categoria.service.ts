import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient
    ) { }
    url = environment.caminho + environment.port
    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }

     getAllCategoria():Observable<Categoria[]>{
      return this.http.get<Categoria[]>(`${this.url}/categorias`, this.token)
    }
    getByIdCategoria(id:number):Observable<Categoria>{
      return this.http.get<Categoria>(`${this.url}/categorias/${id}`,this.token)
    }
    getBynameCategoria(nome:string):Observable<Categoria>{
      return this.http.get<Categoria>(`${this.url}/categorias/${nome}`,this.token)
    }
    postCategoria(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(`${this.url}/categorias`, categoria ,this.token)
  }
  putCategoria(categoria:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(`${this.url}/categorias`, categoria,this.token)
  }
  deleteCategoria(id:number){
    return this.http.delete(`${this.url}/categorias/${id}`,this.token)
  }
}


