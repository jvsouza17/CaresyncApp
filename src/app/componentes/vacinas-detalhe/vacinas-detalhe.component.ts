import { Component, OnInit, ViewChild } from '@angular/core';
import { Config } from 'datatables.net';
import { map, Subject } from 'rxjs';
import { Vacina } from '../../DTOs/vacina/vacina';
import { UserService } from '../../services/user/user.service';
import { VacinaService } from '../../services/vacinas/vacina.service';

@Component({
  selector: 'app-vacinas-detalhe',
  templateUrl: './vacinas-detalhe.component.html',
  styleUrl: './vacinas-detalhe.component.css'
})
export class VacinasDetalheComponent {

  vacinas: Vacina[] = [];
  dadosFixos: any = {};
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private vacinaService: VacinaService, private userService: UserService) { }

  ngOnInit() {
    // Configuração do DataTable
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
    });;
  }

  getDadosFixos() {
    return this.userService.getUser().pipe(
      map((response) => {
        this.dadosFixos = {
          nomePaciente: `${response.nome} ${response.sobrenome}`,
          dataNascimento: response.dataNascimento,
        };
      })
    );
  }

  getVacinas(){
    this.vacinaService.getVacinas().subscribe((vacinas) => {
      this.vacinas = vacinas;
      console.log(this.vacinas);
      this.dtTrigger.next(null);
    })
  }




  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
