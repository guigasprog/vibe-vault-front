import { LocalStorageService } from '../services/localstorage.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = LocalStorageService.getLocalStorage('token');
    let requestRetorno: HttpRequest<any>;
    if (token) {
      requestRetorno = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
    } else {
      requestRetorno = req.clone();
    }
    return next.handle(requestRetorno);
  }
}
