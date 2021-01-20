import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}

  @Output() userDataEmitter = new EventEmitter<{
    username: string;
    userConfirmed: boolean;
  }>();
  userForm: FormGroup;

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

  onRegister() {
    this.auth.onSignupUser({ ...this.userForm.value }).then((user) => {
      this.userDataEmitter.emit({
        username: user.getUsername(),
        userConfirmed: true,
      });
    });
  }
}
