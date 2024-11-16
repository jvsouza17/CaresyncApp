import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ExameService } from '../../services/exames/exame.service';
import { AgendamentoExames } from '../../DTOs/exames/agendamentoExames';
import { Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-meus-exames',
  templateUrl: './meus-exames.component.html',
  styleUrl: './meus-exames.component.css'
})
export class MeusExamesComponent {

  // exames!: AgendamentoExames[];

  paciente = {
    nome: 'João da Silva',
    dataNascimento: '1990-05-15'  // data de nascimento
  };

  // Dados dos exames
  exames = [
    { nome: 'Hemograma Completo', hora: '08:30', data: new Date('2024-10-10'), resultado: 'Normal' },
    { nome: 'Raio-X de Tórax', hora: '10:00', data: new Date('2024-10-11'), resultado: 'Normal' },
    { nome: 'ECG', hora: '09:00', data: new Date('2024-10-12'), resultado: 'Alterado' },
    { nome: 'Hemograma Completo', hora: '08:30', data: new Date('2024-10-10'), resultado: 'Normal' },
    { nome: 'Raio-X de Tórax', hora: '10:00', data: new Date('2024-10-11'), resultado: 'Normal' },
    { nome: 'ECG', hora: '09:00', data: new Date('2024-10-12'), resultado: 'Alterado' },
    { nome: 'Hemograma Completo', hora: '08:30', data: new Date('2024-10-10'), resultado: 'Normal' },
    { nome: 'Raio-X de Tórax', hora: '10:00', data: new Date('2024-10-11'), resultado: 'Normal' },
    { nome: 'ECG', hora: '09:00', data: new Date('2024-10-12'), resultado: 'Alterado' }
  ];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private exameService: ExameService){

  }
  ngOnInit() {
    this.dtOptions = {
      order: [[2, 'asc']],
      ordering: true,
      dom: 'rfBtip',
      pagingType: 'full',
      pageLength: 10,
      processing: true
    }
    this.dtTrigger.next(null)
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // getExames() {
  //   this.exameService.getExames().subscribe(result: => {
  //     this.exames = result;
  //   })
  // }


}