import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
user:User = new User()
confirmaaSenha:string
oTipoUsuario:string


  constructor(
    private auth:AuthService,
   private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmarSenha(event:any){
  this.confirmaaSenha= event.target.value
  }

  tipoUsuario(event:any){
    this.oTipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.oTipoUsuario
    if(this.user.senha != this.confirmaaSenha){
      alert("A senha estão incorretas!")
    }else{
      this.auth.cadastrar(this.user).subscribe((resp:User)=>{
        this.user= resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')

      })
    }
  }

}
