import {Injectable, Inject} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { Config, WindowRef } from '@spartacus/core';
import { ResourceService } from 'src/app/shared/resource-service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LogoutRedirectGuard implements CanActivate {

  constructor(private router: Router, @Inject(Config) public globalConfig: any, protected resourceService: ResourceService, protected windowRef: WindowRef) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let returnToUrl = `${this.windowRef.location.origin}/logout`;
    let logoutUrl = `${this.globalConfig.authentication.baseUrl}${this.globalConfig.authentication.logoutUrl}?client_id=${this.globalConfig.authentication.client_id}&returnTo=${returnToUrl}`

    this.windowRef.location.href = logoutUrl;
    return true;

  }
}
