import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ExameService } from '../../services/exames/exame.service';
import { Exames } from '../../DTOs/exames/exames';
import { Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrl: './exames.component.css'
})
export class ExamesComponent {

  // exames!: Exames[];

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
      order: [[1, 'asc']],
      ordering: true,
      dom: 'rfBtip',
      pagingType: 'full',
      pageLength: 5,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json'
      }
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
