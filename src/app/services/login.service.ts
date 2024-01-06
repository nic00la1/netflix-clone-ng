import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(email: string, password: string) {
    // In a real-world scenario, you would make an HTTP request to your backend API here.
    // For simplicity, let's just log a message for now.
    console.log(`Logging in user with email: ${email}`);

    // Here, you would handle the response from the backend, including token storage.
    // For simplicity, we'll just store a dummy token in local storage.
    localStorage.setItem('token', Math.random() + '');
  }
  get isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
