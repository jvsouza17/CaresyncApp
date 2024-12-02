import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Vacina } from '../../DTOs/vacina/vacina';
import { Config } from 'datatables.net';
import { UserService } from '../../services/user/user.service';
import { VacinaService } from '../../services/vacinas/vacina.service';

@Component({
  selector: 'app-cartao-vacinas',
  templateUrl: './cartao-vacinas.component.html',
  styleUrl: '../vacinas-detalhe/vacinas-detalhe.component.css'
})
export class CartaoVacinasComponent {

  vacinas: Vacina[] = [];
  dadosFixos: any = {};
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private vacinaService: VacinaService, private userService: UserService) { }

  ngOnInit() {
    this.dtOptions = {
      order: [[0, 'asc']],
      ordering: true,
      dom: 'rfBtip',
      pagingType: 'full',
      pageLength: 10,
      processing: true
    };

    this.getDadosFixos().subscribe(()=>{
      this.getVacinas();
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

  getVacinas() {
    this.vacinaService.getVacinas().subscribe(vacinas => {
      this.vacinas = vacinas;
      console.log(this.vacinas);
      this.dtTrigger.next(null);
      // this.vacinas.dataAplicacao = `${result.dataAplicacao} ${result.horaAplicacao}`;
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
