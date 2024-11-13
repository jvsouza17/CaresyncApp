import { Component, OnInit, ViewChild } from '@angular/core';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { Vacina } from '../../DTOs/vacina/vacina';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-vacinas-detalhe',
  templateUrl: './vacinas-detalhe.component.html',
  styleUrl: './vacinas-detalhe.component.css'
})
export class VacinasDetalheComponent {
 vacinas: Vacina[] = [
    { nome: 'Hepatite B', lote: 'ABC123XY', labProdut: 'Saúde Inc', unidade: 'Taguatinga', assinatura: 'Dr. Fulano' },
    { nome: 'Febre Amarela', lote: 'ABC123XY', labProdut: 'Saúde Inc', unidade: 'Taguatinga', assinatura: 'Dr. Fulano' },
    { nome: 'Influenza', lote: 'ABC123XY', labProdut: 'Saúde Inc', unidade: 'Taguatinga', assinatura: 'Dr. Fulano' },
    { nome: 'COVID-19', lote: 'ABC123XY', labProdut: 'Saúde Inc', unidade: 'Taguatinga', assinatura: 'Dr. Fulano' },
  ];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    // Configuração do DataTable
    this.dtOptions = {
      order: [[0, 'asc']],
      ordering: true,
      dom: 'rfBtip',
      pagingType: 'full',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json'
      },
    };
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
      // É importante destruir o Subject ao destruir o componente
      this.dtTrigger.unsubscribe();
    }

}
