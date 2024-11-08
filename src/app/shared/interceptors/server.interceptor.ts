import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestRetorno: HttpRequest<any>;

    const baseUrl = environment.apiUrl;

    if (!req.url.startsWith('http')) {
      requestRetorno = req.clone({
        url: baseUrl + req.url,
      });
    } else {
      requestRetorno = req.clone({ url: req.url });
    }

    return next.handle(requestRetorno);
  }
}
