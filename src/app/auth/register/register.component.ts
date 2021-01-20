import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    let username: string = '';
    let password: string = '';
    let confirmPassword: string = '';
    let email: string = '';
    this.userForm = new FormGroup({
      username: new FormControl(username, Validators.required),
      password: new FormControl(password, Validators.required),
      confirmPassword: new FormControl(confirmPassword, Validators.required),
      email: new FormControl(email, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log('registered');
  }
}
