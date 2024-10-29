import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { UserLogin } from '../DTOs/user-login';
import { UserCadastro } from '../DTOs/user-cadastro';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private token: any
    public currentUser: any

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  logar(user: UserLogin){
    this.token = localStorage.getItem('token');
    this.currentUser = localStorage.getItem('currentUser');

    if(!this.token || !this.currentUser){
      this.logarUsuario(user) // Requisita um token para login
    } else  {
      this.router.navigate(['/home']);  // Redireciona para a rota principal caso o token seja válido
    }
  }

  cadastrar(user: UserCadastro) {
    console.log(user)
    this.cadastrarUsuario(user);
  }

  logarUsuario(user: UserLogin) {
    try {
      console.log(user)
      return this.http.post(`${environment.apiUrl}/auth/login`, user).subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('currentUser', user.login)
        this.router.navigate(['/home']);
      });
    } catch (error) {
      return console.log(error);
    }
  }

  cadastrarUsuario(user: UserCadastro) {
    try {
      return this.http.post(`${environment.apiUrl}/auth/cadastro`, user).subscribe((response: any) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
    } catch (error) {
      return console.log(error);
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getCurrentUser()  {
    let currentUser = localStorage.getItem('currentUser');
    return currentUser ? currentUser : null;
  }

  // necessária a criação de uma rota no backend para obter o id de um usuário
  // getIdUsuarioLogado(): string {
  //   return localStorage.getItem('usuario')
  //     ? (JSON.parse(atob(localStorage.getItem('usuario'))) as IUsuario).id
  //     : null;
  // }

  // necessária a criação de uma rota no backend para obter o nome de um usuário
  // getUsername() {

  // }
  getToken() {
   let token = localStorage.getItem('token');
   return token ? token : null;
  }
  logado(): boolean {
    let token = localStorage.getItem('token');
    return token ? true : false;
  }


}


