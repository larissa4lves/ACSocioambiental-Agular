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
 userLogin:UserLogin = new UserLogin()

  constructor(private auth:AuthService,
    private router:Router
    ) { }

  ngOnInit(){
  }
  entrar(){
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
  }

}
