import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { DataTableDirective } from 'angular-datatables';
import { AgendamentoConsultas } from '../../DTOs/agendamentos/agendamentoConsultas';
import { UserService } from '../../services/user/user.service';
import { ConsultaService } from '../../services/consulta/consulta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrl: './meus-agendamentos.component.css',
})

export class MeusAgendamentosComponent {
  agendamentos: AgendamentoConsultas[] = [];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private consultaService: ConsultaService, private router: Router) { }
  ngOnInit() {
    this.dtOptions = {
      order: [[2, 'asc']],
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
    this.getAgendamentos();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getAgendamentos(){
    this.consultaService.getConsultas().subscribe((agendamentos: AgendamentoConsultas[]) => {
      this.agendamentos = agendamentos;
      this.dtTrigger.next(null);
      console.log(this.agendamentos);
    });
  }

  verDetalhesConsulta(idConsulta: AgendamentoConsultas["id_consulta"]) {
    console.log(idConsulta)
    this.router.navigate(['/consultas-detalhes', idConsulta]);

  }
}

