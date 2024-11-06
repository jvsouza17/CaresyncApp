import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent  {

  formulario!: FormGroup;
  fotoPreview: string | ArrayBuffer | null = null;

  constructor(private formBuilder: FormBuilder) {

    this.criarForms();
  }

  ngOnInit() {}

  criarForms() {
    this.formulario = this.formBuilder.group({
      nomeCompleto: [{ value: 'Nome Completo do Usuário', disabled: true }],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: [{ value: '01/01/1999', disabled: true }],
      sexo: [{ value: 'Masculino', disabled: true }],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      numero: ['', Validators.required],
      endereco: ['', Validators.required]
    });
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
