import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Vacina } from '../../DTOs/vacina/vacina';
import { DataTableDirective } from 'angular-datatables';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-cartao-vacinas',
  templateUrl: './cartao-vacinas.component.html',
  styleUrl: './cartao-vacinas.component.css'
})
export class CartaoVacinasComponent {
  nomePaciente = 'John Doe';
  dataNascimento = '01/01/1999';

  vacinas: Vacina[] = [
    { nome: 'Hepatite B', dataAplicacao: '12/01/2024', proximaDose: '12/01/2026', status: 'PENDENTE', statusClass: 'pendente' },
    { nome: 'Febre Amarela', dataAplicacao: '12/01/2024', proximaDose: '12/01/2026', status: 'COMPLETA', statusClass: 'completa' },
    { nome: 'Influenza', dataAplicacao: '12/01/2024', proximaDose: '12/01/2026', status: 'COMPLETA', statusClass: 'completa' },
    { nome: 'COVID-19', dataAplicacao: '12/01/2024', proximaDose: '12/01/2026', status: 'PENDENTE', statusClass: 'pendente' }
  ];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
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
    };
    this.dtTrigger.next(null);
  }
    ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
