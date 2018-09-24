import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { GuardianService } from '../_services/global/guardian.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    authToken: any;
    constructor(
        private cookieService: CookieService,
        private guardianService: GuardianService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*  return fromPromise(this.guardianService.getTokenAuth())
              .pipe(data => {
                  console.log(data);
                  if (data) {
                      if (this.authToken) {
                          // agrega una autorización en la cabecerz si el jwt token está disponible
                          this.authToken = JSON.parse(this.cookieService.get('authToken'));
                          request = request.clone({
                              setHeaders: {
                                  Authorization: `Bearer ${this.authToken}`
                              }
                          });
                          return next.handle(request);
                      }
                  }
              });
              */

        if (this.cookieService.check('authToken')) {
            this.authToken = JSON.parse(this.cookieService.get('authToken'));
            if (this.authToken) {
                // agrega una autorización en la cabecerz si el jwt token está disponible
                this.authToken = JSON.parse(this.cookieService.get('authToken'));
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${this.authToken}`
                    }
                });
            }
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request);
    }
}
