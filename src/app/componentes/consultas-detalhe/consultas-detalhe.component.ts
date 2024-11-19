import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgendamentoConsultas } from '../../DTOs/consultas/agendamentoConsultas';
import { ConsultaService } from '../../services/consulta/consulta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultas-detalhe',
  templateUrl: './consultas-detalhe.component.html',
  styleUrl: './consultas-detalhe.component.css'
})
export class ConsultasDetalheComponent {

  user: AgendamentoConsultas = {};
  idConsulta = this.route.snapshot.paramMap.get('id')

  constructor(private route: ActivatedRoute, private consultaService: ConsultaService) {}

  ngOnInit() {
    this.carregarDetalhesConsulta();
  }

  carregarDetalhesConsulta() {
    this.consultaService.getConsultaDetalhes(this.idConsulta!).subscribe((response) => {
      console.log(response);
      this.user.nomePaciente = response.nomePaciente
      this.user.dataNascimento = response.dataNascimento
      this.user.nomeMedico = response.nomeMedico
      this.user.especialidade = response.especialidade
      this.user.tipo = response.tipo
      this.user.dataConsulta = response.dataConsulta
      this.user.hora = response.hora
      this.user.local = response.local
      this.user.endereco = response.endereco
      this.user.observacoes = response.observacoes
    })
  }

}
