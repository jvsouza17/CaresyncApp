import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private http: HttpClient) { }

  // requisição para capturar as vacinas do usuário logado, na rota cartao-vacinas
  // será utilizada 
  // getVacinas() {
  //   return this.http.get(`${environment.apiUrl}/vacinas`);
  // }


}
