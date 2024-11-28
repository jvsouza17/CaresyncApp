import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../../DTOs/users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/user`);
  }

  // alterar informações do usuário logado, tem que ter o id do usuário na rota?
  editUser(user: User): Observable<any> {
    return this.http.put(`${environment.apiUrl}/user`, user);
  }
}
