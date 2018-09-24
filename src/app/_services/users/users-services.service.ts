import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { User } from '../../_models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${environment.apiEndpoint}/api/users?page=1&limit=10`);
  }

  storeUsers(user: User) {
    return this.http.post(`${environment.apiEndpoint}/api/users`, user);
  }
}
