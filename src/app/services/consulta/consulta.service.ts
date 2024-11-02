import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    // rota para agendar consulta corrigida para receber os dados enviados no formulário da rota /agendar-consulta
    //   agendarConsulta(): Observable<any> {
    //     return this.http.post(`${environment.apiUrl}/agendar-consulta`);
    // }

    // rota para listar as consultas do usuário logado.
    // getConsultas(): Observable<any> {
    //   return this.http.get(`${environment.apiUrl}/listar-consultas`);
    // }
}
