import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Vacina } from '../../DTOs/vacina/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private http: HttpClient) { }

  // requisição para capturar as vacinas do usuário logado, na rota cartao-vacinas
  // será utilizada
  getVacinas(): Observable<Vacina[]> {
    return this.http.get<Vacina[]>(`${environment.apiUrl}/vacina/listar-vacinas`);
  }

}
