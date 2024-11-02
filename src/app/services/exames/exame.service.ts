import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(private http: HttpClient) { }

  // listar exames do usuário logado
  // getExames(){
  //   return this.http.get<exames[]>('https://api.example.com/exames');
  // }

  // listar detalhes do exame clicado, capturar por id na rota?
  //  getExameDetalhes(){
  //   return this.http.get<exame>('https://api.example.com/exame/:id');
  // }
}
