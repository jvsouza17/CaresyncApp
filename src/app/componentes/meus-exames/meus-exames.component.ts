import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { ExameService } from '../../services/exames/exame.service';
import { AgendamentoExames } from '../../DTOs/exames/agendamentoExames';
import { map, Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meus-exames',
  templateUrl: './meus-exames.component.html',
  styleUrl: './meus-exames.component.css'
})
export class MeusExamesComponent {

  exames: AgendamentoExames[] = [];
  dadosFixos: any = {};
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private exameService: ExameService, private router: Router, private userService: UserService){}

  ngOnInit() {
    this.tableWithData();
  }

  tableWithData() {
    this.dtOptions = {
      order: [[2, 'asc']],
      ordering: true,
      dom: 'rfBtip',
      pagingType: 'full',
      pageLength: 10,
      processing: true
    };
    this.getDadosFixos().subscribe(() => {
      this.getAgendamentosExames();
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

  getAgendamentosExames() {
    this.exameService.getExames().subscribe((exames) => {
      this.exames = exames;
      console.log(this.exames);
      this.dtTrigger.next(null);
    });
  }

  verDetalhesExame(idExame: AgendamentoExames["id_exame"]) {
    console.log(idExame)
    this.router.navigate(['/exames-detalhes', idExame]);
  }

}
