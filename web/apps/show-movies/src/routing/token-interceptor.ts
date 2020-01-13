import { Injectable, Inject } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { switchMap, catchError,finalize, filter, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { WINDOW } from '@show-movies/ui';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  partialLoginUrl: string = "login?login_challenge="

  constructor(private authService: AuthenticationService,
              private router: Router,
              @Inject(WINDOW) private window: Window){

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {

    const token = this.authService.getAuthToken();

    return next.handle(this.addTokenToRequest(request, token))
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>err).status) {
              case 401:
                return this.handle401Error(request, next);

              case 400:
                return <any>this.authService.logout();

              case 404:
                // When just authorizing to OAuth/Hydra we receive '302 Found' to redirect to new url (ex: https:/xxxxxxxxx/login?login_challenge=ccccccc)
                // For some reason Angular can not handle this redirect before browser so it results in 404 Not Found
                // Here we catch this error and properly redirect it to 'login' page
                if (err.url.indexOf(this.partialLoginUrl) >= 0){
                  window.location.href = err.url;
                  return null;
                }
                break;

              default:
                // All other errors
                return throwError(err);
            }
          } else {
            return throwError(err);
          }
        }));
  }

private addTokenToRequest(request: HttpRequest<any>, token: string) : HttpRequest<any> {
  return request.clone({ setHeaders: { Authorization: `Bearer ${token}`}});
}

private handle401Error(request: HttpRequest<any>, next: HttpHandler) {

    if(!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);

      return this.authService.getRefreshToken()
        .pipe(
          switchMap((token: string) => {
            if(token) {
              this.tokenSubject.next(token);;
              return next.handle(this.addTokenToRequest(request, token));
            }

            return <any>this.authService.logout();
          }),
          catchError(err => {
            return <any>this.authService.logout();
          }),
          finalize(() => {
            this.isRefreshingToken = false;
          })
        );
    } else {
      this.isRefreshingToken = false;

      return this.tokenSubject
        .pipe(filter(token => token != null),
          take(1),
          switchMap(token => {
          return next.handle(this.addTokenToRequest(request, token));
        }));
    }
  }
}
