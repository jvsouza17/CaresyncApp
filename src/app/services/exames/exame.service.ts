import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgendamentoExames } from '../../DTOs/exames/agendamentoExames';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(private http: HttpClient) { }

  // agendar exames
  agendarExame(exame: AgendamentoExames): Observable<any> {
    return this.http.post(`${environment.apiUrl}/exame/agendar`, exame);
  }

  // listar exames do usuário logado
  getExames(): Observable<AgendamentoExames[]>{
    return this.http.get<AgendamentoExames[]>(`${environment.apiUrl}/exame/listar-exames`);
  }

  // listar detalhes do exame clicado, capturar por id na rota?
   getExameDetalhes(id: AgendamentoExames['id_exame']): Observable<any> {
    return this.http.get(`${environment.apiUrl}/exame/listar-exames/${id}`);
  }
}
