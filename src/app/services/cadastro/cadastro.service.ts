import { Injectable } from '@angular/core';
import { CadastroCompletoDTO } from '../../model/cadastro/cadastro-completo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = 'http://192.168.15.4:3000/cadastrar';

  constructor(private http: HttpClient) { }

  public criaCadastro(value: CadastroCompletoDTO): Observable<CadastroCompletoDTO> {
    return this.http.post<any>(this.apiUrl, value);
  }
}
