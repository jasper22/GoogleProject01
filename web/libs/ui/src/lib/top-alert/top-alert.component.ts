import { Component, OnInit, Input } from '@angular/core';
import { AlertType } from './alert-types.enum';

@Component({
  selector: 'top-alert',
  templateUrl: './top-alert.component.html',
  styleUrls: ['./top-alert.component.css']
})
export class TopAlertComponent implements OnInit {


  @Input() message: string;

  @Input() alertType: AlertType;

  constructor() { }

  ngOnInit() {
  }

  getAlertTypeClass(): string {
    switch(this.alertType){
      case AlertType.Danger:
        return "alert-danger";

        case AlertType.Warning:
          return "alert-warning";

        case AlertType.Info:
          return "alert-info";

        default:
          return "";
    }
  }
}
