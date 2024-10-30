import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from '../../../environments/environment.development';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authenticationService : AuthenticationService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authenticationService.getToken();
        const requestUrl: Array<any> = request.url.split('/');
        const apiUrl: Array<any> = environment.apiUrl.split('/');

        if (token && requestUrl[2] === apiUrl[2]) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    token: `${token}`
                }
            });
            return next.handle(request).pipe(catchError((error: any) => {
                  if (error instanceof HttpErrorResponse && error.status === 401) {
                      this.authenticationService.logout();
                  }
                  // Usa o `throwError` para garantir que sempre retorna um Observable
                  return throwError(() => new Error(error.message));
              })
          );
        }
        else {
            return next.handle(request);
        }
    }
}
