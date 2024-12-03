import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserCadastro } from '../../DTOs/user-cadastro';
import { CpfMaskPipe } from '../../pipes/cpf-mask.pipe';
import { TelefoneMaskPipe } from '../../pipes/telefone-mask.pipe';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../pipes/date/date-br.pipe';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: '../auth-container/auth-container.component.css',
  providers: [CpfMaskPipe, TelefoneMaskPipe,
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideMomentDateAdapter(MY_FORMATS),
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroComponent {

  formulario!: FormGroup;
  user!: UserCadastro;
  telefoneValue: string = '';
  cpfValue: string = '';
  dateValue: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private cpfMaskPipe: CpfMaskPipe,
    private telefoneMaskPipe: TelefoneMaskPipe,
  ) {
    this.user = new UserCadastro();
  }

  ngOnInit() {
    this.criarForms();
  }

  // Validador para confirmar que as senhas são iguais

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const senha = control.get('senha')?.value;
    const confirmSenha = control.get('confirmSenha')?.value;

    return senha === confirmSenha ? null : { passwordMismatch: true };
  }
//validators.pattern ainda não testados
  criarForms() {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      numeroSUS: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      CPF: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      CEP: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      UF: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      confirmSenha: ['', [Validators.required]],
      aceitarTermos: ['', [Validators.requiredTrue]],
    }, { validators: this.passwordMatchValidator }
    );
  }

  formatCpf() {
    let cpf = this.formulario.get('CPF')?.value;
    cpf = cpf.replace(/\D/g, '');  // Remove qualquer caractere que não seja número
    this.cpfValue = this.cpfMaskPipe.transform(cpf);  // Aplica a máscara de CPF usando o pipe
    this.formulario.get('CPF')?.setValue(this.cpfValue, { emitEvent: false });  // Atualiza o campo com o valor formatado
  }

  formatTelefone() {
    let telefone = this.formulario.get('telefone')?.value;
    telefone = telefone.replace(/\D/g, '');  // Remove qualquer caractere que não seja número
    this.telefoneValue = this.telefoneMaskPipe.transform(telefone);  // Aplica a máscara de Telefone usando o pipe
    this.formulario.get('telefone')?.setValue(this.telefoneValue, { emitEvent: false });  // Atualiza o campo com o valor formatado
  }
    formularioValido() {
      if(this.formulario.valid){
          this.user.nome = this.formulario.get('nome')?.value;
          this.user.sobrenome = this.formulario.get('sobrenome')?.value;
          this.user.sexo = this.formulario.get('sexo')?.value;
          this.user.numeroSUS = this.formulario.get('numeroSUS')?.value;
          this.user.dataNascimento = this.formulario.get('dataNascimento')?.value;
          this.user.CPF = this.formulario.get('CPF')?.value;
          this.user.endereco = this.formulario.get('endereco')?.value;
          this.user.CEP = this.formulario.get('CEP')?.value;
          this.user.cidade = this.formulario.get('cidade')?.value;
          this.user.UF = this.formulario.get('UF')?.value;
          this.user.email = this.formulario.get('email')?.value;
          this.user.telefone = this.formulario.get('telefone')?.value;
          this.user.senha = this.formulario.get('senha')?.value;
          this.authenticationService.cadastrar(this.user);
      // } else {
      //   console.log(this.formulario);
      //   throw new Error("Preencha os campos obrigatórios para continuar!");
      }
    }
}

