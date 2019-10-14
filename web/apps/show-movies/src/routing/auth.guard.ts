import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const token = this.authService.getAuthToken();

      if (token) {
        return true;
      }

      // Token still not set -> redirect to /login
      // this.router.navigate(["/login"], {queryParams: {returnUrl: state.url}});
      this.authService.tryToLogin(environment.hydra_url, environment.oauth_client_id);
      return false;
    }
}
