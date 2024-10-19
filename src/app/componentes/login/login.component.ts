import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../auth-container/auth-container.component.css'
})
export class LoginComponent {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  // para aplicar a lógica de formulário reativo precisamos de:
  // logarUsuario(){
  //   if(this.formulario.valid){ // se algum campo do login não for válido não entra nesse if
  //     //lógica para logar o usuário
  //     //necessário criar uma service onde terá uma função para validar as credenciais do usuário e permitir o login, será chamada nessa função
  //     //necessário integração com o back-end para validar se o login é válido ou não. Ideia para testar: criar um API-REST FAKE somente para simular usuários
  //   }
  // }

}
