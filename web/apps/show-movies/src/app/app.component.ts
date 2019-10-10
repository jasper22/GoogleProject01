import { Component } from '@angular/core';
import { AlertType } from '@show-movies/ui';

@Component({
  selector: 'show-movies-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'show-movies';

  alertMessage: string;

  alertType: AlertType;

  constructor() {
    this.alertMessage = 'This is a message';
    this.alertType = AlertType.Info;
  }

  setAlert(message: string, type: AlertType = AlertType.Info) {
    this.alertMessage = message;
    this.alertType = type;
  }
}
