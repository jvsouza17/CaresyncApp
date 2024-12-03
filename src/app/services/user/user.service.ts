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

  editUser(user: User): Observable<any> {
    return this.http.put(`${environment.apiUrl}/user`, user);
  }

  verifyEmail(req: Object): Observable<any> {
    return this.http.post(`${environment.apiUrl}/esqueci-a-senha`, req);
  }

  verifyCode(req: Object): Observable<any> {
    return this.http.post(`${environment.apiUrl}/codigo`, req);
  }

  resetPassword(req: Object): Observable<any> {
    return this.http.post(`${environment.apiUrl}/alterar-senha`, req);
  }
}
