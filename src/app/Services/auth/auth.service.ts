import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//import { jwt_decode } from 'jwt-decode';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private loginUrl = 'http://localhost:8081/api/auth/login';  // Your backend API

  constructor(private http: HttpClient) {}

  // Login method to authenticate user
  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(this.loginUrl, { email, password })
      .pipe(
        map(response => {
          // Store the token in localStorage
          localStorage.setItem('authToken', response.token);
          return true;
        }),
        catchError(error => {
          console.error('Login failed', error);
          return of(false);  // Return false on error
        })
      );
  }

  // Logout method to clear stored token
  logout() {
    localStorage.removeItem('authToken');
  }

  // Check if the user is authenticated by verifying if the token exists
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  // Get the stored token if needed for future requests
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
/*
  getUserRole(): string | null {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.role; // Extract the role from the token
    }
    return null;
  }
    */
}
