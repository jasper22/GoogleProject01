import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'show-movies-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    usernameCtrl: ['', Validators.required],
    passwordCtrl: [''],
    rememberMe: ['']
  });

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder) {
    this.actRoute.queryParamMap.subscribe(currentParams => {

      // http://localhost:4200/login?login_challenge=10403c8a9fb348a4b0f48b2b24a4a565

      const login_challenge = currentParams.get('login_challenge')
      console.log(`login challendge: ${login_challenge}`);
    });
  }

  ngOnInit() {
  }

  onLogin() {

  }
}
