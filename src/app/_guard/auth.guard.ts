import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { GuardianService } from '../_services/global/guardian.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  stateToken: any;
  promise: any;
  constructor(private router: Router,
    private guardianService: GuardianService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    return new Promise((resolve) => {
      this.guardianService.getTokenAuth()
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          resolve(err);
        });
    });
  }
}
