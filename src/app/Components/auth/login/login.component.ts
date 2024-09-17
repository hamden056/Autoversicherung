import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  loginError: string | null = null;  // For error handling

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loginError = null;  // Clear any previous error

    this.authService.login(this.email, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/step1']);  // Redirect after successful login
        } else {
          this.loginError = 'Invalid email or password';  // Show error message
        }
      },
      error => {
        console.error('Login error', error);
        this.loginError = 'Login failed. Please try again later.';  // Display error
      }
    );
  }

}
