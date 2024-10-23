import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserLogin } from '../../DTOs/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth-container/auth-container.component.css']
})
export class LoginComponent {

  formulario!: FormGroup;
  user!: UserLogin;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) {this.user = new UserLogin()}

  ngOnInit() {
    localStorage.clear() //limpar token do usuário no cache, usado para fins de teste
    this.criarForms();
  }

    criarForms() {
      this.formulario = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
      })
    }
    formularioValido() {
      if(this.formulario.valid){
          this.user.login = this.formulario.get('login')?.value;
          this.user.password = this.formulario.get('senha')?.value;
          this.authenticationService.login(this.user);
      } 
    }

}
