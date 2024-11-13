import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Consulta } from '../../DTOs/agendamentos/consulta';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient,

  ) { }

    // rota para agendar consulta corrigida para receber os dados enviados no formulário da rota /agendar-consulta
    agendarConsulta(consulta: Consulta): Observable<any> {
      return this.http.post(`${environment.apiUrl}/consulta/agendar`, consulta);
    }

    // rota para listar as consultas do usuário logado.
    getConsultas(): Observable<any> {
      return this.http.get(`${environment.apiUrl}/consulta/listar-consultas`);
    }

    // rota para obter os dados da consulta clicada
    getConsultaDetalhes(id: String): Observable<any> {
      return this.http.get(`${environment.apiUrl}/consulta/listar-consultas/${id}`);
    }
}
