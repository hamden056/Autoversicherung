import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/login']);  // Redirect to login page after logout
  }
}
