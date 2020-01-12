import { Injectable, Inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { WINDOW } from '@show-movies/ui';
import UUID from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {
  private scope1 = 'torrents_status';
  private scope2 = 'upload_new';


  constructor(private router: Router, @Inject(WINDOW) private window: Window) { }

  getLoginPath(ouathServerBaseUrl: string, client_id: string): string {
    // https://localhost:4444/oauth2/auth?client_id=aclient&scope=torrents_status,upload_new&response_type=code&redirect_uri=http://localhost:4200&state=0987654321

    // const params_parsed = this.location.path(false);
    const original_location = window.origin;


    const params = new HttpParams()
    .set('client_id', client_id)
    .set('scope', `${this.scope1} ${this.scope2}`)
    .set('response_type', 'code')
    .set('redirect_uri', original_location)
    .set('state', encodeURI(UUID()));

    return `${ouathServerBaseUrl}?${params.toString()}`;
  }
}
