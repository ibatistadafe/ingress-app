import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ZipcodeData } from "../components/zip-form.model";


@Injectable({
  providedIn: 'root'
})
export class ZipFormService {

  // Futuramente recuperar URL do .env ou arquivo de configuração
  baseUrl = "http://localhost:3001/zipcodeData";

  constructor(private http: HttpClient) { }

  // Função para inserir dados
  registerZipcodeData(user: ZipcodeData): Observable<ZipcodeData> {
    // Requisição HTTP
    return this.http.post<ZipcodeData>(this.baseUrl, user);
  }
}
