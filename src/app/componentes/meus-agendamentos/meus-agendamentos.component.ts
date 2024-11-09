import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { DataTableDirective } from 'angular-datatables';
import { Consulta } from '../../DTOs/agendamentos/consulta';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrl: './meus-agendamentos.component.css'
})

export class MeusAgendamentosComponent {
  agendamentos: Consulta[] = [
    { especialidade: 'Pediatria', medico: 'Dra. Marcela', dataConsulta: '12/01/2024', horario: '10:00', endereco: 'UPA N. Bandeirante', localidade: 'N. Bandeirante' },
    { especialidade: 'Oftalmologia', medico: 'Dr. João', dataConsulta: '12/01/2024', horario: '10:00', endereco: 'UPA N. Bandeirante', localidade: 'N. Bandeirante' },
    { especialidade: 'Dentista', medico: 'Dr. Carlos', dataConsulta: '12/01/2024', horario: '10:00', endereco: 'UPA N. Bandeirante', localidade: 'N. Bandeirante' },
    { especialidade: 'Endocrinologia', medico: 'Dr. Tiago', dataConsulta: '12/01/2024', horario: '10:00', endereco: 'UPA N. Bandeirante', localidade: 'N. Bandeirante' },
  ];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json'
      }
    };
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // getAgendamentos(){
  // }
}

