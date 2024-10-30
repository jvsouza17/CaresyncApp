import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MY_FORMATS } from '../../pipes/date/date-br.pipe';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';


@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrl: './agendar-consulta.component.css',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideMomentDateAdapter(MY_FORMATS)]
})
export class AgendarConsultaComponent {

  formulario!: FormGroup;
  patientInfo: any;

  constructor(
    private formBuilder: FormBuilder,
  ){

  }
  ngOnInit(){
    this.patientInfo = {
      nomePaciente: 'John Doe',
      numeroSUS: '1234567890',
      sexo: 'Masculino',
      dataNascimento: new Date('01-01-1995')
    };
    this.criarForms();
  }

  //necessário capturar do backend dados do usuário
  //necessário ajuste no backend para receber somente esses dados
  criarForms(){
    this.formulario = this.formBuilder.group({
      nomePaciente: [this.patientInfo.nomePaciente, { disabled: true }],
      numeroSUS: [this.patientInfo.numeroSUS, { disabled: true }],
      sexo: [this.patientInfo.sexo, { disabled: true }],
      dataNascimento: [this.patientInfo.dataNascimento, { disabled: true }],
      especialidade: ['', Validators.required],
      localidade: ['', Validators.required],
      dataConsulta: ['', Validators.required],
      horario: ['', Validators.required],
      observacoes: ['']
    });
  }

  formularioValido(){
    if(this.formulario.valid){
      console.log(this.formulario)
      //continuar lógica
    }
  }
}
