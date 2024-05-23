import { PasswordData } from './../components/password-form/password-form.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordFormService {
  //futuramente recperar url do .env
  baseUrl = "http://localhost:3001/passwordData"

  constructor(private http:HttpClient) { }

  //criar função para inserir dados
  registerUserPassword(user: PasswordData):Observable<PasswordData>{
    //requisição http
    return this.http.post<PasswordData>(this.baseUrl, user)
  }
}
