import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  username: string;
  ngOnInit(): void {
    this.username = this.route.snapshot.params.username;
  }

  onConfirmOtp(providedOtp) {
    this.auth.confirmSignUp({ username: this.username, code: providedOtp }).then(response => {
      console.log(response)
    });
  }
}
