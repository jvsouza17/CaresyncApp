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
  // getExames(){
  //   return this.http.get<exames[]>('https://api.example.com/exames');
  // }

  // listar detalhes do exame clicado, capturar por id na rota?
  //  getExameDetalhes(){
  //   return this.http.get<exame>('https://api.example.com/exame/:id');
  // }
}
