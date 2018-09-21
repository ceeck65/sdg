import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`https://member-manager-cachorros.herokuapp.com/login`, { email, password })
      .pipe(map(user => {
        // si el logueo se realizó de manera exitosa, el api devuelve el los datos de usuario y el token
        if (user && user.token) {
          // se almacenan los detalles del usuario junto al token en el local storage
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // cuando un usuario cierra sesión se elimina del local storage los datos del usuario
    localStorage.removeItem('currentUser');
  }
}
