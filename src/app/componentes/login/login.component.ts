import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { UserLogin } from '../../dto/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth-container/auth-container.component.css']
})
export class LoginComponent {

  formulario!: FormGroup;
  user!: UserLogin;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) {this.user = new UserLogin()}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })

    console.log(this.formulario);
  }

    formularioValido() {
      console.log(this.formulario.valid);
      if(this.formulario.valid){
          this.user.login = this.formulario.get('email')?.value;
          this.user.password = this.formulario.get('senha')?.value;
          this.authenticationService.login(this.user);
      } 
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
