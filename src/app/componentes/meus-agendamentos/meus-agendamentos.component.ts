import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { DataTableDirective } from 'angular-datatables';
import { Agendamento } from '../../DTOs/agendamentos/agendamento';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrl: './meus-agendamentos.component.css'
})

export class MeusAgendamentosComponent {
  agendamentos: Agendamento[] = [
    { consulta: 'Pediatria', medico: 'Dra. Marcela', dia: '12/01/2024', hora: '10:00', endereco: 'UPA N. Bandeirante', localidade: 'N. Bandeirante' },
    { consulta: 'Oftalmologia', medico: 'Dr. João', dia: '12/01/2024', hora: '10:00', endereco: 'UPA N. Bandeirante', localidade: 'N. Bandeirante' },
    { consulta: 'Dentista', medico: 'Dr. Carlos', dia: '12/01/2024', hora: '10:00', endereco: 'UPA N. Bandeirante', localidade: 'N. Bandeirante' },
    { consulta: 'Endocrinologia', medico: 'Dr. Tiago', dia: '12/01/2024', hora: '10:00', endereco: 'UPA N. Bandeirante', localidade: 'N. Bandeirante' },
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

