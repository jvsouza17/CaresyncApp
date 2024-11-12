import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { DataTableDirective } from 'angular-datatables';
import { Consulta } from '../../DTOs/agendamentos/consulta';
import { UserService } from '../../services/user/user.service';
import { ConsultaService } from '../../services/consulta/consulta.service';
import { DateBRPipe } from '../../pipes/date/date-br.pipe';


@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrl: './meus-agendamentos.component.css',
  providers: [DateBRPipe]
})

export class MeusAgendamentosComponent {
  agendamentos: Consulta[] = [];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private consultaService: ConsultaService) { }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json'
      }
    };
    this.dtTrigger.next(null);
    this.getAgendamentos();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getAgendamentos(){
    this.consultaService.getConsultas().subscribe((agendamentos: Consulta[]) => {
      this.agendamentos = agendamentos;
      console.log(this.agendamentos);
    });
  }
}

