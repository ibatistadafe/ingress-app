import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://4361-2804-7f0-471-c2d-6bad-6cd7-e100-8670.ngrok-free.app';

  constructor(private http: HttpClient,
  ) { }
  public login(login: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, {login, senha})
    .pipe(tap(res => {
       localStorage.setItem('tokenIbfIngress', res.token) 
    }));
  }

  public logout() {
    localStorage.removeItem('tokenIbfIngress');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('tokenIbfIngress');
  }

  public getToken(): string {
   return localStorage.getItem('tokenIbfIngress');
  }
}
