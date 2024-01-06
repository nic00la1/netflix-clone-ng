import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  loginService = inject(LoginService);
  router = inject(Router);

  ngOnInit(): void {
    // if user is already logged in then redirect to browse page
    if (!this.loginService.isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
  }
}
