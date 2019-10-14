import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Oauth2Service } from './oauth2.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private oauthService: Oauth2Service, private httpClient: HttpClient) {

  }

  tryToLogin(oauthServerBaseAddress: string, client_id: string) {
    const targetUrl = this.oauthService.getLoginPath(oauthServerBaseAddress, client_id);

    // This call will trigger OAuth2 client authentication and everything
    this.httpClient.get(targetUrl);
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
