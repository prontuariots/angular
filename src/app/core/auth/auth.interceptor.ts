import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SessionService } from '../session/services/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private sessionService: SessionService
  ) { 

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.sessionService.accessToken}`
      }
    });
    
    return next.handle(request);
  }
}
