import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfMaskPipe } from '../../pipes/cpf-mask.pipe';
import { TelefoneMaskPipe } from '../../pipes/telefone-mask.pipe';
import { UserService } from '../../services/user/user.service';
import { map } from 'rxjs';
import { User } from '../../DTOs/users/user';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [CpfMaskPipe, TelefoneMaskPipe],
  })
export class PerfilComponent  {
  // @ViewChild('fileInput') fileInput!: ElementRef;
  // imagemPreview: string | null = null;

  dadosFixos: any = {};
  user!: User;
  formulario!: FormGroup;
  telefoneValue: string = '';
  cpfValue: string = '';
  dateValue: String = '';

  constructor(private formBuilder: FormBuilder,
              private cpfMaskPipe: CpfMaskPipe,
              private telefoneMaskPipe: TelefoneMaskPipe,
              private userService: UserService,
              private datePipe: DatePipe,
              private router: Router
            ){}

  ngOnInit() {
    this.getDadosFixos().subscribe(() => {
      this.criarForms();
      // this.logFieldLengths();
    })
  }

  // logFieldLengths() {
  //   Object.keys(this.formulario.controls).forEach(field => {
  //     const control = this.formulario.get(field);
  //     if (control) {
  //       const value = control.value || '';
  //       console.log(value);
  //       console.log(`Field ${field} has ${value.length} characters`);
  //     }
  //   });
  // }

  formatTelefone() {
    let telefone = this.formulario.get('telefone')?.value;
    telefone = telefone.replace(/\D/g, '');  // Remove qualquer caractere que não seja número
    this.telefoneValue = this.telefoneMaskPipe.transform(telefone);  // Aplica a máscara de Telefone usando o pipe
    this.formulario.get('telefone')?.setValue(this.telefoneValue, { emitEvent: false });  // Atualiza o campo com o valor formatado
  }

  formatCpf() {
    let cpf = this.formulario.get('CPF')?.value;
    cpf = cpf.replace(/\D/g, '');  // Remove qualquer caractere que não seja número
    this.cpfValue = this.cpfMaskPipe.transform(cpf);  // Aplica a máscara de CPF usando o pipe
    this.formulario.get('CPF')?.setValue(this.cpfValue, { emitEvent: false });  // Atualiza o campo com o valor formatado
  }

  criarForms() {
    const formattedDate = this.datePipe.transform(this.dadosFixos.dataNascimento, 'dd/MM/yyyy');
    this.formulario = this.formBuilder.group({
      nomePaciente: [{ value: this.dadosFixos.nomePaciente, disabled: true }],
      numeroSUS: [{ value: this.dadosFixos.numeroSUS, disabled: true }],
      CPF: [{ value: this.dadosFixos.CPF, disabled: true }],
      dataNascimento: [{ value: formattedDate, disabled: true }],
      sexo: [{ value: this.dadosFixos.sexo, disabled: true }],
      email: [{value: this.dadosFixos.email, disabled: false}, [Validators.email]],
      telefone: [{value: this.dadosFixos.telefone, disabled: false}, [Validators.minLength(14), Validators.maxLength(15)]],
      CEP: [{value: this.dadosFixos.CEP, disabled: false}, [Validators.minLength(8), Validators.maxLength(9)]],
      cidade: [{value: this.dadosFixos.cidade, disabled: false}, [Validators.minLength(2)]],
      UF: [{value: this.dadosFixos.UF, disabled: false}],
      endereco: [{value: this.dadosFixos.endereco, disabled: false}]
    });

  }

  getDadosFixos() {
    return this.userService.getUser().pipe(
      map((response) => {
        this.dadosFixos = {
          nomePaciente: `${response.nome} ${response.sobrenome}`,
          dataNascimento: response.dataNascimento,
          sexo: response.sexo,
          numeroSUS: response.numeroSUS,
          CPF: response.CPF,
          email: response.email,
          telefone: response.telefone,
          cidade: response.cidade,
          UF: response.UF,
          CEP: response.CEP,
          endereco: response.endereco,
        };
      })
    );
  }

  salvar() {
    if (this.formulario.valid) {
      this.user = {}

      const formValues = this.formulario.getRawValue();
      this.user.email = formValues.email;
      this.user.telefone = formValues.telefone;
      this.user.cidade = formValues.cidade;
      this.user.UF = formValues.UF;
      this.user.CEP = formValues.CEP;
      this.user.endereco = formValues.endereco;
      this.userService.editUser(this.user).subscribe((response)=>{
        console.log(response)
        console.log('Usuário editado com sucesso');

      });
      console.log(this.formulario);
    }
  }

  // onFileChange(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   if (target.files && target.files[0]) {
  //     const file = target.files[0];


  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.imagemPreview = e.target?.result as string;
  //     };
  //     reader.readAsDataURL(file);


  //     this.uploadImagem(file);
  //   }
  // }

  // triggerFileInput() {
  //   this.fileInput.nativeElement.click();
  // }

  // uploadImagem(file: File) {
  //   const formData = new FormData();
  //   formData.append('imagem', file);

  //   console.log('Upload simulada', file.name);
  // }

}
