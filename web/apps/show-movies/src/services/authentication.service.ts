import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  /*
  // Function will return authorization (JWT) token if any
  */
  getAuthToken() : string {
    if (localStorage.length == 0) {
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
