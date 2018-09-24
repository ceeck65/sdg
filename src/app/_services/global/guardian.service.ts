import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';
import { Md5 } from 'md5-typescript';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  currentUser: any;
  authToken: any;
  hashKeyToken: any;
  urlToken: any;
  hash: any;
  first: any;
  second: any;
  third: any;
  crypto: any;
  _pwd: string;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) {
    this.hashKeyToken = environment.hashKeyToken;
    this.urlToken = environment.apiEndpoint;
  }

  getTokenAuth(): Promise<boolean> {
    this.currentUser = this.cookieService.get('currentUser');
    this.authToken = this.cookieService.get('authToken');
    this._pwd = this.cookieService.get('_pwd');
    return new Promise((resolve, reject) => {
      this.generateHash(JSON.parse(this.authToken), JSON.parse(this.currentUser).email).then(data => {
        if (this._pwd === data) {
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  }

  setTokenAuth(token: any, email: string) {
    this.generateHash(token, email).then(data => {
      this.cookieService.set('_pwd', data);
    });
  }

  generateHash(token: any, email: string): Promise<any> {
    return new Promise((resolve) => {
      this.first = Md5.init(token + this.hashKeyToken);
      this.second = Md5.init(this.urlToken + email);
      this.third = Md5.init(this.first + this.second);
      this.crypto = Md5.init(token + email + this.third);
      this.hash = `$ey${this.first}.${this.second}$.${this.crypto}`;
      resolve(this.hash);
    });
  }

}
