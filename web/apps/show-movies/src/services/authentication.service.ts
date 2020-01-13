import { Injectable,  Inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Oauth2Service } from './oauth2.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { WINDOW } from '@show-movies/ui';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private oauthService: Oauth2Service,
              private httpClient: HttpClient,
              private router: Router,
              @Inject(WINDOW) private window: Window) {

  }

  tryToLogin(oauthServerBaseAddress: string, client_id: string): void {

    const targetUrl = this.oauthService.getLoginPath(oauthServerBaseAddress, client_id);

    // This call will trigger OAuth2 client authentication and everything

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // 'Access-Control-Allow-Origin' : window.origin,
      })};

      // 'Content-Type':  'text/plain',
      // 'Access-Control-Allow-Origin' : window.origin,
      // 'Authorization': "Basic Zm9vLTQ6YmFy",
      // 'Origin': window.origin

      //const targetUrl = "http://localhost:4445/clients";


    this.httpClient.get(targetUrl, httpOptions)
                    .pipe(
                      catchError(err => this.handleError(err))
                    )
                    .subscribe(
                      x => console.log("All ok"),
                      error => {
                        this.redirectToOAuthError(error);
                      });

  }

  handleError(httpError: HttpErrorResponse): Observable<any> {

    if ((httpError.status === 0) && ( (<ProgressEvent> httpError.error).timeStamp > 0))
    {
      // Hydra server is not running at all
      let url = httpError.url;
      url = url.substring(0, url.indexOf('/',8));
      return throwError(`OAuth2 server is not available or it's not running at address: ${url}`);
    }

    console.error(`Error occurred in AuthenticationService ! Error is: ${httpError.error}`);
    return of(httpError.error);
  }

  redirectToOAuthError(error: string) {
    this.router.navigate(['/auth_error'], {queryParams: { "error_description":error }});
  }

  /*
  // Function will return authorization (JWT) token if any
  */
  getAuthToken() : string {
    if (localStorage.length === 0) {
      return "";
    }

    const token = localStorage.getItem('userToken');
    return token;
  }

  getRefreshToken() : Observable<string> {
    return of("");
  }

  logout() : void {

  }
}
