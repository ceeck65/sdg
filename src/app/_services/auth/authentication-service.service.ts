import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  cookieValue = 'SDGSymtem';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string) {
    return this.http.post<any>(`https://member-manager-cachorros.herokuapp.com/login`, { email, password })
      .pipe(map(user => {
        // si el logueo se realizó de manera exitosa, el api devuelve el los datos de usuario y el token
        if (user && user.token) {
          // se almacenan los detalles del usuario junto al token en el local storage
          sessionStorage.setItem('authToken', JSON.stringify(user.token));
          sessionStorage.setItem('authToken', JSON.stringify(user.token));
          this.cookieService.set('currentUser', JSON.stringify(user.user));
          this.cookieService.set('authToken', JSON.stringify(user.token));

        }

        return user;
      }));
  }

  logout() {
    // cuando un usuario cierra sesión se elimina del local storage los datos del usuario
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('authToken');
    this.cookieService.deleteAll();
  }
}
