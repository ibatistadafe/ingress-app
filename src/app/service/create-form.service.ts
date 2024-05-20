import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalData } from '../components/create-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateFormService {
  //futuramente recperar url do .env
  baseUrl = "http://localhost:3001/personalData"

  constructor(private http:HttpClient) { }

  //criar função para inserir dados
  registerUserData(user: PersonalData):Observable<PersonalData>{
    //requisição http
    return this.http.post<PersonalData>(this.baseUrl, user)
  }
}
