import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.caminho + environment.port

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin:UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>(`${this.url}/usuarios/logar`,userLogin)

  }

  cadastrar(user:User):Observable<User>{
    return this.http.post<User>(`${this.url}/usuarios/cadastrar`,user)

  }

  logado (){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  ajusteMenu() {
    if(window.document.URL != '/home') {
      window.document.querySelector('..navbar-light')?.setAttribute('style', 'position: relative !important;')

    }

  }

}
