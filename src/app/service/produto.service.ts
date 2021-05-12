
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment.prod"
import { Produto } from "../model/Produto"

@Injectable({
    providedIn: 'root'
  })
  export class produtoService {

    constructor(
      private http: HttpClient

    ) { }

    url = environment.caminho + environment.port
    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }

    getAllProduto(): Observable<Produto[]>{
      return this.http.get<Produto[]>(`${this.url}/produtos`, this.token)
    }

    getByIdProduto(id:number):Observable<Produto>{
      return this.http.get<Produto>(`${this.url}/produtos/${id}`,this.token)
    }

    getBynameProduto(nome:string):Observable<Produto>{
      return this.http.get<Produto>(`${this.url}/produtos/${nome}`,this.token)
    }

    postProduto(item: Produto):Observable<Produto>{
      return this.http.post<Produto>(`${this.url}/produtos`, item ,this.token)
    }

    putProduto(item: Produto):Observable<Produto>{
      return this.http.put<Produto>(`${this.url}/produtos`, item, this.token);
    }

    deleteProduto(id:number){
      return this.http.delete(`${this.url}/produtos/${id}`,this.token)
    }

  }
