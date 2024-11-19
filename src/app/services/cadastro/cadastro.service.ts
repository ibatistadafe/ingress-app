import { Injectable } from '@angular/core';
import { CadastroCompletoDTO } from '../../model/cadastro/cadastro-completo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = 'https://4361-2804-7f0-471-c2d-6bad-6cd7-e100-8670.ngrok-free.app/cadastrar';

  constructor(private http: HttpClient) { }

  public criaCadastro(value: CadastroCompletoDTO): Observable<CadastroCompletoDTO> {
    return this.http.post<any>(this.apiUrl, value);
  }
}
