import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket, TicketsPackage } from '../../model/eventos/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class IngressosService {
  private apiUrl = 'http://192.168.15.4:3000/ingressos';

  constructor(private http: HttpClient) { }
  
  public criarIngressos(ingressos: TicketsPackage): Observable<TicketsPackage> {
    return this.http.post<TicketsPackage>(this.apiUrl, ingressos);
  }
}
