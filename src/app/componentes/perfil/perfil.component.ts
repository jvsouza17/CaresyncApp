import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfMaskPipe } from '../../pipes/cpf-mask.pipe';
import { TelefoneMaskPipe } from '../../pipes/telefone-mask.pipe';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MY_FORMATS } from '../../pipes/date/date-br.pipe';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [CpfMaskPipe, TelefoneMaskPipe,
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideMomentDateAdapter(MY_FORMATS),
  ],
})
export class PerfilComponent  {

  formulario!: FormGroup;
  fotoPreview: string | ArrayBuffer | null = null;
  telefoneValue: string = '';
  cpfValue: string = '';
  dateValue: String = '';

  constructor(private formBuilder: FormBuilder,
              private cpfMaskPipe: CpfMaskPipe) {}

  ngOnInit() {
    this.criarForms();
  }

  criarForms() {
    this.formulario = this.formBuilder.group({
      nomeCompleto: [{ value: 'Nome Completo do Usuário', disabled: true }],
      numeroSUS: [{ value: 123456789123, disabled: true }],
      CPF: [{ value: '05240644152', disabled: true }],
      dataNascimento: [{ value: '01/01/1999', disabled: true }],
      sexo: [{ value: 'Masculino', disabled: true }],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      numero: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  formatCpf() {
    let cpf = this.formulario.get('CPF')?.value;
    cpf = cpf.replace(/\D/g, '');  // Remove qualquer caractere que não seja número
    this.cpfValue = this.cpfMaskPipe.transform(cpf);  // Aplica a máscara de CPF usando o pipe
    this.formulario.get('CPF')?.setValue(this.cpfValue, { emitEvent: false });  // Atualiza o campo com o valor formatado
  }

  // getDadosFixos() {
  //   return this.userService.getUser().pipe(
  //     map((response) => {
  //       this.dadosFixos = {
  //         nomePaciente: `${response.nome} ${response.sobrenome}`,
  //         numeroSUS: response.numeroSUS,
  //         sexo: response.sexo,
  //         dataNascimento: response.dataNascimento
  //       };
  //       console.log(this.dadosFixos);
  //     })
  //   );
  // }

  // Método para carregar e exibir a foto de perfil
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // this.fotoPreview = e.target?.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  salvar() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // Aqui você pode chamar um serviço para enviar as informações ao backend
    }
  }
}
