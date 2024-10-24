import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserCadastro } from '../../DTOs/user-cadastro';
import { CpfMaskPipe } from '../../pipes/cpf-mask.pipe';
import { TelefoneMaskPipe } from '../../pipes/telefone-mask.pipe';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: '../auth-container/auth-container.component.css',
  providers: [CpfMaskPipe, TelefoneMaskPipe]
})
export class CadastroComponent {

  formulario!: FormGroup;
  user!: UserCadastro;
  telefoneValue: string = '';
  cpfValue: string = '';	

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private cpfMaskPipe: CpfMaskPipe,
    private telefoneMaskPipe: TelefoneMaskPipe
  ) {
    this.user = new UserCadastro();
  }

  ngOnInit() {
    localStorage.clear(); //limpar token do usuário no cache, usado para fins de teste
    this.criarForms();
  }

  // Validador para confirmar que as senhas são iguais
  passwordMatchValidator(form: FormGroup) {
    const senha = form.get('senha')?.value;
    const confirmSenha = form.get('confirmSenha')?.value;

    if (senha !== confirmSenha) {
      form.get('confirmSenha')?.setErrors({ senhaNaoConfere: true });
    } else {
      form.get('confirmSenha')?.setErrors(null);
    }
  }
//validators.pattern ainda não testados
  criarForms() {
    this.formulario = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.pattern('^([0-9]{2}[\.]?){3}-[0-9]{2}$')]],
      endereco: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern('^(\([0-9]{2}\) |[0-9]{2})?([0-9]{4,5}|[0-9]{4}-[0-9]{4})$')]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmSenha: ['', [Validators.required]],
    }, 
    { validator: this.passwordMatchValidator });
  }

  formatCpf() {
    let cpf = this.formulario.get('cpf')?.value;
    cpf = cpf.replace(/\D/g, '');  // Remove qualquer caractere que não seja número
    this.cpfValue = this.cpfMaskPipe.transform(cpf);  // Aplica a máscara de CPF usando o pipe
    this.formulario.get('cpf')?.setValue(this.cpfValue, { emitEvent: false });  // Atualiza o campo com o valor formatado
  }

  formatTelefone() {
    let telefone = this.formulario.get('telefone')?.value;
    telefone = telefone.replace(/\D/g, '');  // Remove qualquer caractere que não seja número
    this.telefoneValue = this.telefoneMaskPipe.transform(telefone);  // Aplica a máscara de Telefone usando o pipe
    this.formulario.get('telefone')?.setValue(this.telefoneValue, { emitEvent: false });  // Atualiza o campo com o valor formatado
  }
  
    // formularioValido() {
    //   if(this.formulario.valid){
    //       this.user.login = this.formulario.get('login')?.value;
    //       this.user.password = this.formulario.get('senha')?.value;
    //       this.authenticationService.login(this.user);
    //   } 
    // }
}

