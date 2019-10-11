import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onLogin() {
    
  }
}
