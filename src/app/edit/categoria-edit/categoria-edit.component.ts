import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  /* INSTANCIA UM OBJETO TEMA, UM VEZ QUE ESTAMOS ESPERANDO EDITAR UM DADO DE TEMA */
  categoria: Categoria = new Categoria();

  /* INJETA AS DEPENDENCIAS VINDO DO TemaService TRAZENDO OS METODOS CRIADOS E AS ROTAS DO OBJETO Router */
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    /* RESPOSAVEL POR ACESSAR A URL E CAPITURAR O PARAMETRO QUE ESTA SENDO TRABALHADO NO MOMENTO */
    private route: ActivatedRoute

  ) { }

  /* SEMPRE QUE O COMPONENTE E CHAMADO, E EXECUTADO TUDO QUE ESTA AQUI DENTRO */
  ngOnInit() {
    /* REDIRECIONA O USUARIO PARA A TELA DE LOGIN, SEMPRE QUE O TOKEN NAO FOR IDENTIFICADO NA SESSAO */
    if(environment.token == '') {
      this.router.navigate(['/login']);

    }

    /* CAPITURA O PARAMENTRO DA URL E INSERE DETRO DO ATRIBUTO */
    let id = this.route.snapshot.params['id'];
    /* INSERE O VALOR COLETADO DA URL DENTRO DO METODO findByIdTema(id), QUE POR SUA VEZ RECEBE COMO PAREMTRO UM ID, DESSSA FORMA TRAZENDO OS DADOS DAQUELE ID EM ESPECIFICO */
    this.findByIdTema(id);

  }

  /* CRIA UM METODO QUE RECEBE COMO PARAMETRO UM ID VINDO DA URL */
  /* ACESSA O TemaService PARA TER ACESSO AO METODOS DE ACESSO HTTP CRIADOS */
  /* INFORMA O ID RECEBIDO DENTRO DO METODO DO SERVICE */
  /* CONVERTE ESSE DADO E O INSERE DENTRO DO OBJETO TEMA CRIADO */
  /* DESSA FORMA CONSEGUIMOS TER ACESSO AOS DADOS DENTRO DE NOSSO HTML */
  findByIdTema(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp;

    })

  }

  /* METODO CHAMADO POR MEIO DE CLICK, ONDE TEM COMO FUNCAO, CHAMAR O METODO CRIADO DENTRO DE TemaCervice RECEBER COMO PAREMETRO O OBJETO ATUALIZADO DO USAURIO */
  /* CONVERTE ESSE DADO E ARMAZENA SEU VALOR DENTRO DA TABELA NOVAMENTE PARA QUE POSSAMOS APRESENTALA AO USUARIO */
  /* APOS ISSO RETORNAMOS AUTOMATICAMENTE A PAGINA DE TEMAS, COM OS DADOS JA ATUALIZADOS */
  atualizar() {
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      alert('Tema atualizado com sucesso!');

      this.router.navigate(['/categoria']);

    })

  }

}
