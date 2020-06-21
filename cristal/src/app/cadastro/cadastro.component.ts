import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario:Usuario = new Usuario()

  erroSenha:boolean=false;

  confirmacao = {
    senha:''
  }

  constructor(private usuarioService:UsuarioService)  { }

  ngOnInit(): void {
      function validarCpf() {
      let numbers = this.usuarioBuscar.login.match(/\d/g);
      let numberLength = 0;
      if (numbers) {
        numberLength = numbers.join('').length;
      }
      if (numberLength <= 11) {
        return [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
      } else {
        return [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
      }
    }


    const inputs = document.querySelectorAll(".input");


		function addcl(){
			let parent = this.parentNode.parentNode;
			parent.classList.add("focus");
		}

		function remcl(){
			let parent = this.parentNode.parentNode;
			if(this.value == ""){
				parent.classList.remove("focus");
			}
		}


		inputs.forEach(input => {
			input.addEventListener("focus", addcl);
			input.addEventListener("blur", remcl);
		});
  }

  validar(){
    if(this.usuario.senha===this.confirmacao.senha){
      this.erroSenha=false;
      this.cadastrar();
    }else{
      this.erroSenha=true;
    }
  }

  cadastrar(){
    this.usuarioService.postUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
      location.assign('/login')
    })
  }

}
