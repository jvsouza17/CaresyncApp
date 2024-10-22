import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { UserLogin } from '../dto/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  login(user: UserLogin){
    let token = localStorage.getItem('token');

    if(!token){
      this.getUserToken(user) // Requisita um token para login
    } else  {
      this.router.navigate(['/']);  // Redireciona para a rota principal caso o token seja válido
    }

  }

  getUserToken(user: UserLogin) {
    return this.http.post(`${environment.apiUrl}/auth/login`, {user}).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/home']);
    });
  }

}
