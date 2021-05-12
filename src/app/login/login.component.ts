import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  btn = window.document.querySelector('svg');
  verSenha = window.document.querySelector('#verSenha');
  cadastrar = window.document.querySelector('#cadastrar');

  nome = window.document.querySelector('#nome');
  labelNome = window.document.querySelector('#labelNome');
  usuario = window.document.querySelector('#usuario');
  labelUsuario = window.document.querySelector('#labelUsuario');
  senha = window.document.querySelector('#senha');
  labelSenha = window.document.querySelector('#labelSenha');
  confirmasenha = window.document.querySelector('#confirmasenha');
  labelConfirmeSenha = window.document.querySelector('#labelConfirmeSenha');

  valideNome: boolean;
  valideUsuario: boolean;
  valideSenha: boolean;
  valideConfirmeSenha: boolean;

  msgErro = <HTMLInputElement>window.document.querySelector('#msgErro');
  msgSucesso = window.document.querySelector('#msgSucesso');

  constructor(private auth:AuthService,
    private router:Router

    ) { }

  ngOnInit(){
  }

  /*entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin)=>{
      this.userLogin = resp

      environment.id = this.userLogin.id
      environment.token = this.userLogin.token
      environment.nome= this.userLogin.nome
      environment.usuario= this.userLogin.usuario
      environment.email= this.userLogin.email
      environment.foto=this.userLogin.foto

      console.log(environment.id )
      console.log(environment.token)
      console.log(environment.email)
      console.log(environment.nome)
      console.log(environment.usuario)

      this.router.navigate(['/home'])

    },errinho=>{
      if(errinho.status ==500){
        alert('Email ou senha estão incorretos! ')
      }
    })
  }*/

  /* BOTAO CLICAR MOSTRAR SENHA - SENHA */
  botaoSenha() {
      let inputSenha = window.document.querySelector('#senha');

      if(inputSenha?.getAttribute?.('type') == 'password') {
          inputSenha.setAttribute('type', 'text')

      }else {
          inputSenha?.setAttribute('type', 'password')

      }

  }

  /* BOTAO CLICAR MOSTRAR SENHA - CONFIRMAR SENHA */
  mostrarSenha() {
    let inputSenha = window.document.querySelector('#confirmasenha')

      if(inputSenha?.getAttribute('type') == 'password') {
          inputSenha.setAttribute('type', 'text')

      }else {
          inputSenha?.setAttribute('type', 'password')

      }

  }

  /* LOGA O USUARIO NA SESSAO */
  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin) => {
      this.userLogin = resp

      environment.id = this.userLogin.id
      environment.token = this.userLogin.token
      environment.nome= this.userLogin.nome
      environment.usuario= this.userLogin.usuario
      environment.email= this.userLogin.email
      environment.foto=this.userLogin.foto

      console.log(environment.id )
      console.log(environment.token)
      console.log(environment.email)
      console.log(environment.nome)
      console.log(environment.usuario)

      this.router.navigate(['/home'])

    },() => {
      let usuarioValida = window.document.querySelector('#usuario');
      let focusUsuario = <HTMLInputElement>window.document.querySelector('#usuario');
      let labelUsuario = window.document.querySelector('#labelUsuario');
      let senhaValida = window.document.querySelector('#senha');
      let labelSenha = window.document.querySelector('#labelSenha');

      usuarioValida?.setAttribute('style', 'border-color: red');
      labelUsuario?.setAttribute('style', 'color: red');
      senhaValida?.setAttribute('style', 'border-color: red');
      labelSenha?.setAttribute('style', 'color: red');

      this.msgErro?.setAttribute('style', 'display: block');
      this.msgErro.value = 'Usuario ou senha invalidos';

      this.msgSucesso?.setAttribute('style', 'display: none');

      /* RETORNA O MOUSE PARA O INPUT PARA INSERIR OS DADOS NOVAMENTE */
      focusUsuario.focus();

    })

  }

}
