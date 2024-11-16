import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendamentoExames } from '../../DTOs/exames/agendamentoExames';
import { UserService } from '../../services/user/user.service';
import { ExameService } from '../../services/exames/exame.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MY_FORMATS } from '../../pipes/date/date-br.pipe';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-agendar-exame',
  templateUrl: './agendar-exame.component.html',
  styleUrl: './agendar-exame.component.css',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideMomentDateAdapter(MY_FORMATS)]
})
export class AgendarExameComponent {
  formulario!: FormGroup;
  dadosFixos: any = {};
  user!: AgendamentoExames;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private exameService: ExameService,
    private router: Router
  ){}

  ngOnInit() {
    this.getDadosFixos().subscribe(() => {
    });
    this.criarForms();
  }

  criarForms() {
    this.formulario = this.formBuilder.group({
      nomePaciente: [{ value: this.dadosFixos.nomePaciente, disabled: true }],
      numeroSUS: [{ value: this.dadosFixos.numeroSUS, disabled: true }],
      sexo: [{ value: this.dadosFixos.sexo, disabled: true }],
      dataNascimento: [{ value: this.dadosFixos.dataNascimento, disabled: true }],
      nomeExame: ['', Validators.required],
      localidade: ['', Validators.required],
      dataExame: ['', Validators.required],
      horario: ['', Validators.required],
      tipo: ['', Validators.required],
      endereco: ['', Validators.required],
      observacoes: ['']
    });
  }
  getDadosFixos() {
    return this.userService.getUser().pipe(
      map((response) => {
        this.dadosFixos = {
          nomePaciente: `${response.nome} ${response.sobrenome}`,
          numeroSUS: response.numeroSUS,
          sexo: response.sexo,
          dataNascimento: response.dataNascimento
        };
        console.log(this.dadosFixos);
      })
    );
  }

  formularioValido(){
    // if(this.formulario.valid){
    //   this.user = {};

    // // Obtém todos os valores do formulário, inclusive os campos desabilitados
    //   const formValues = this.formulario.getRawValue();
    //   this.user.nomePaciente = formValues.nomePaciente;
    //   this.user.numeroSUS = formValues.numeroSUS;
    //   this.user.sexo = formValues.sexo;
    //   this.user.dataNascimento = formValues.dataNascimento;
    //   this.user.dataConsulta = formValues.dataConsulta;
    //   this.user.hora = formValues.horario;
    //   this.user.especialidade = formValues.especialidade;
    //   this.user.local = formValues.localidade;
    //   this.user.endereco = formValues.endereco;
    //   this.user.tipo = formValues.tipo;
    //   this.user.observacoes = formValues.observacoes;

    //   console.log(this.user)
    //   console.log(this.formulario)
    //   this.consultaService.agendarConsulta(this.user).subscribe((result)=>{
    //     console.log(result);
    //     this.router.navigate(['/minhas-consultas'])
    //   })
    // }
  }
}
