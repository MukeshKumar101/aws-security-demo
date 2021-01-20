import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    let username: string = '';
    let password: string = '';
    this.loginForm = new FormGroup({
      username: new FormControl(username, Validators.required),
      password: new FormControl(password, Validators.required),
    });
  }

  onLogin() {
    console.log('logged');
  }
}
