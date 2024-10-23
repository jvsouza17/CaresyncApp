import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserCadastro } from '../../DTOs/user-cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: '../auth-container/auth-container.component.css'
})
export class CadastroComponent {

  formulario!: FormGroup;
  user!: UserCadastro;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) {this.user = new UserCadastro()}

  ngOnInit() {
    localStorage.clear() //limpar token do usuário no cache, usado para fins de teste
    this.criarForms();
  }

    //necessário dar continuidade no formulário reativo
    criarForms() {
      this.formulario = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.pattern('')]],
      rg: ['', [Validators.required, Validators.pattern('')]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      })
    }
    // formularioValido() {
    //   if(this.formulario.valid){
    //       this.user.login = this.formulario.get('login')?.value;
    //       this.user.password = this.formulario.get('senha')?.value;
    //       this.authenticationService.login(this.user);
    //   } 
    // }
}

