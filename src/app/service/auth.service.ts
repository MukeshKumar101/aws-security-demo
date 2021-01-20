import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  async onSignupUser({ username, password, email }) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.log('error signing up:', error);
    }
  }


  async confirmSignUp({username, code}) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}
}
