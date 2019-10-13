import { Component, OnInit } from '@angular/core';
import { AlertType } from '@show-movies/ui';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'show-movies-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'show-movies';

  alertMessage: string;

  alertType: AlertType;

  constructor(private authService: AuthenticationService) {
    // this.alertMessage = 'This is a message';
    // this.alertType = AlertType.Info;


  }

  ngOnInit(): void {
    // this.authService.tryToLogin(environment.hydra_url, environment.oauth_client_id);
  }

  setAlert(message: string, type: AlertType = AlertType.Info) {
    this.alertMessage = message;
    this.alertType = type;
  }
}
