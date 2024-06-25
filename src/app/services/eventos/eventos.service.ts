import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from '../../model/eventos/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private apiUrl = 'http://localhost:3000/eventos/list-eventos';

  constructor(private http: HttpClient) { }

  public listaEventos(): Observable<Array<Eventos>> {
    return this.http.get<Array<Eventos>>(this.apiUrl);
  }
}
