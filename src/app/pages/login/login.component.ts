import { Component, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  logoUrl = LOGO_URL;
  bgUrl = BG_IMG_URL;

  email!: string;
  password!: string;
  loginService = inject(LoginService);
  router = inject(Router);

  onSubmit() {
    // validate email and password
    if (!this.email || !this.password) {
      alert('Provide email or password');
      return;
    }
    // if email and password is correct lets login the user
    this.loginService.login(this.email, this.password);
    // now we are logged in so we will redirect to our browse page
    this.router.navigateByUrl('/browse');
  }
}
