import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  login(){
    let token = localStorage.getItem('token');

    if(!token){
      this.getUserToken() // Requisita um token para login
    } else  {
      this.router.navigate(['/']);  // Redireciona para a rota principal caso o token seja válido
    }
  }

  getUserToken() {
    return this.http.post(`${environment.apiUrl}/auth/login`, {}).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/home']);
    });
  }

}
