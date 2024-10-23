import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate{
    constructor(
      private authenticationService: AuthenticationService,
      private router: Router) { }
      
    canActivate(){
      if (this.authenticationService.logado()) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
}