import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(private http: HttpClient) { }

  //lógica para requisição de exames, necessário alinhar com o backend
  // getExames(){
  //   return this.http.get<exames[]>('https://api.example.com/exames');
  // }
}
