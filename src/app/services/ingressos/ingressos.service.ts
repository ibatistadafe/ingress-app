import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket, TicketsPackage } from '../../model/eventos/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class IngressosService {
  private apiUrl = 'https://4361-2804-7f0-471-c2d-6bad-6cd7-e100-8670.ngrok-free.app/ingressos';

  constructor(private http: HttpClient) { }
  
  public criarIngressos(ingressos: TicketsPackage): Observable<TicketsPackage> {
    return this.http.post<TicketsPackage>(this.apiUrl, ingressos);
  }
}
