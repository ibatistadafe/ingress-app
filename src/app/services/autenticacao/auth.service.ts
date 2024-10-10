import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';

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
