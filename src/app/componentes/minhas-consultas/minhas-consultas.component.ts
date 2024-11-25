import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { DataTableDirective } from 'angular-datatables';
import { AgendamentoConsultas } from '../../DTOs/consultas/agendamentoConsultas';
import { UserService } from '../../services/user/user.service';
import { ConsultaService } from '../../services/consulta/consulta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-minhas-consultas',
  templateUrl: './minhas-consultas.component.html',
  styleUrl: './minhas-consultas.component.css',
})

export class MinhasConsultasComponent {
  consultas: AgendamentoConsultas[] = [];
  dadosFixos: any = {};
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private consultaService: ConsultaService, private router: Router, private userService: UserService) { }
  ngOnInit() {
    this.tableWithData();
  }


  tableWithData() {
    this.dtOptions = {
      order: [[2, 'desc']],
      ordering: true,
      dom: 'rfBtip',
      pagingType: 'full',
      pageLength: 10,
      processing: true
    };
    this.getDadosFixos().subscribe(() => {
      this.getAgendamentosConsultas();
    });
  }

  getDadosFixos() {
    return this.userService.getUser().pipe(
      map((response) => {
        this.dadosFixos = {
          nomePaciente: `${response.nome} ${response.sobrenome}`,
          dataNascimento: response.dataNascimento,
        };
        console.log(this.dadosFixos);
      })
    );
  }

  getAgendamentosConsultas(){
    this.consultaService.getConsultas().subscribe((consultas: AgendamentoConsultas[]) => {
      this.consultas = consultas;
      this.dtTrigger.next(null);
      console.log(this.consultas);
    });
  }

  verDetalhesConsulta(idConsulta: AgendamentoConsultas["id_consulta"]) {
    console.log(idConsulta)
    this.router.navigate(['/consultas-detalhes', idConsulta]);

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

