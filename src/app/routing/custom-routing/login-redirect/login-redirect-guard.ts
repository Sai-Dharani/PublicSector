import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { AuthRedirectService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginRedirectGuard implements CanActivate {

  constructor(protected authRedirectService: AuthRedirectService) {}

  canActivate(): Observable<boolean> | boolean {
    this.authRedirectService.redirect();
    return true;
  }
}