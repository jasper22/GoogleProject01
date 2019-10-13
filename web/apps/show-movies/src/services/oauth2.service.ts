import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import UUID from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {
  private scope1 = 'torrents_status';
  private scope2 = 'upload_new';


  constructor(private router: Router) { }

  getLoginPath(ouathServerBaseUrl: string, client_id: string): string {
    // https://localhost:4444/oauth2/auth?client_id=aclient&scope=torrents_status,upload_new&response_type=code&redirect_uri=http://localhost:4200&state=0987654321
 
    var params = new HttpParams()
    .set('client_id', client_id)
    .set('scope', encodeURIComponent(this.scope1 +' ' + this.scope2))
    .set('response_type', 'code')
    .set('redirect_uri', this.router.url)
    .set('state', UUID());

    return ouathServerBaseUrl + params.toString();
  }
}
