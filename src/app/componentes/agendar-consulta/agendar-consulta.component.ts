import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MY_FORMATS } from '../../pipes/date/date-br.pipe';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { UserService } from '../../services/user/user.service';


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
  patientInfo = {
      nomePaciente: 'John Doe',
      numeroSUS: '1234567890',
      sexo: 'Masculino',
      dataNascimento: new Date('01-01-1995')
    };
  dadosFixos = {};
  user!: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ){

  }
  ngOnInit(){

    this.criarForms();
    this.getDadosFixos();

  }

  //necessário capturar do backend dados do usuário
  //necessário ajuste no backend para receber somente esses dados
  criarForms(){
    this.formulario = this.formBuilder.group({
      nomePaciente: [this.patientInfo.nomePaciente],
      numeroSUS: [this.patientInfo.numeroSUS],
      sexo: [this.patientInfo.sexo],
      dataNascimento: [this.patientInfo.dataNascimento],
      especialidade: ['', Validators.required],
      localidade: ['', Validators.required],
      dataConsulta: ['', Validators.required],
      horario: ['', Validators.required],
      tipo: ['', Validators.required],
      endereco: ['', Validators.required],
      observacoes: ['']
    });
  }

  getDadosFixos(){
    this.userService.getUser().subscribe((response) =>{
      this.dadosFixos = {
        nomePaciente: response.nome + response.sobrenome,
        numeroSUS: response.numeroSUS,
        sexo: response.sexo,
        dataNascimento: response.dataNascimento
      }
      console.log(this.dadosFixos)
    })
  }

  mapFormToUser() {
    this.user.nomePaciente = this.patientInfo.nomePaciente
    this.user.numeroSUS = this.patientInfo.numeroSUS
    this.user.sexo = this.patientInfo.sexo
    this.user.dataNascimento = this.patientInfo.dataNascimento
    this.user.dataConsulta = this.formulario.get('dataConsulta')?.value
    this.user.horario = this.formulario.get('horario')?.value
    this.user.especialidade = this.formulario.get('especialidade')?.value
    this.user.local = this.formulario.get('localidade')?.value
    this.user.endereco = this.formulario.get('endereco')?.value
    this.user.tipo = this.formulario.get('tipo')?.value
    this.user.observacoes = this.formulario.get('observacoes')?.value
    }

  formularioValido(){
    if(this.formulario.valid){
      // this.user.nomePaciente = this.patientInfo.nomePaciente
      // this.user.numeroSUS = this.patientInfo.numeroSUS
      // this.user.sexo = this.patientInfo.sexo
      // this.user.dataNascimento = this.patientInfo.dataNascimento
      // this.user.dataConsulta = this.formulario.get('dataConsulta')?.value
      // this.user.horario = this.formulario.get('horario')?.value
      // this.user.especialidade = this.formulario.get('especialidade')?.value
      // this.user.local = this.formulario.get('localidade')?.value
      // this.user.endereco = this.formulario.get('endereco')?.value
      // this.user.tipo = this.formulario.get('tipo')?.value
      // this.user.observacoes = this.formulario.get('observacoes')?.value
      // console.log(this.user)
      // console.log(this.formulario)
      // this.consultaService.agendarConsulta(this.user)
    }
  }
}
