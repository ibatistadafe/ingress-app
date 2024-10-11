// eventos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from '../../model/eventos/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private apiUrl = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}

  public listaEventos(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.apiUrl);
  }

  public buscarEventoPorId(id: string): Observable<Eventos> {
    return this.http.get<Eventos>(`${this.apiUrl}/${id}`);
  }

  public criarEvento(evento: Eventos): Observable<Eventos> {
    return this.http.post<Eventos>(this.apiUrl, evento);
  }

  public bufferToBase64(buffer: Buffer): string {
    // Converte Buffer para string base64
    return buffer.toString('base64');
  }
}
