import { Component } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    // validate email and password
    if (!this.email || this.password) {
      alert('Provide email or password');
      return;
    }
    // if email and password is correct lets login the user
  }
}
