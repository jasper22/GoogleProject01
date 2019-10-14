import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorDetails } from './error-details';


@Component({
  selector: 'show-movies-auth-error',
  templateUrl: './auth-error.component.html',
  styleUrls: ['./auth-error.component.css']
})
export class AuthErrorComponent implements OnInit {

  errorDetails:ErrorDetails;

  constructor(private activeRoute:ActivatedRoute) { 

  }

  ngOnInit() {
    this.activeRoute
            .queryParams
            .subscribe(param => {
              this.errorDetails = <ErrorDetails> JSON.parse(JSON.stringify(param));
              console.log(`Error details is: ${this.errorDetails.error}`);
              console.log(`Error details is: ${this.errorDetails.error_description}`);
            });
  }

}
