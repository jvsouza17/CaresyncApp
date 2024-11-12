import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from '../../DTOs/agendamentos/consulta';
import { ConsultaService } from '../../services/consulta/consulta.service';

@Component({
  selector: 'app-consultas-detalhe',
  templateUrl: './consultas-detalhe.component.html',
  styleUrl: './consultas-detalhe.component.css'
})
export class ConsultasDetalheComponent {

  user!: Consulta;

  constructor(private consultaService: ConsultaService) {}

  ngOnInit() {
    this.carregarDetalhesConsulta();
  }

  carregarDetalhesConsulta() {
    // this.consultaService.getConsultaDetalhes().subscribe((response) => {
    //   this.user.nomePaciente = response.nomePaciente
    //   this.user.dataNascimento = response.dataNascimento
    //   this.user.nomeMedico = response.medico
    //   this.user.especialidade = response.especialidade
    //   this.user.tipo = response.tipo
    //   this.user.dataConsulta = response.dataConsulta
    //   this.user.hora = response.horario
    //   this.user.local = response.localidade
    //   this.user.endereco = response.endereco
    //   this.user.observacoes = response.observacoes
    // })
  }

}
