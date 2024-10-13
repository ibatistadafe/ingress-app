import { Injectable } from '@angular/core';
import { ReservaType } from '../../../reseva';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketsPackage } from '../../model/eventos/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class ResevaService {
  baseUrl = "http://localhost:3000/ingressos/codigo"

  constructor(private http: HttpClient){ }

  //esta puxando todas as reservas
  getAllReservas(): Observable<TicketsPackage[]> {
    return this.http.get<TicketsPackage[]>(this.baseUrl);
  }

  //esta puxando por id
  getReservaId(id: string): Observable<TicketsPackage[]> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<TicketsPackage[]>(url);
    //return this.listarReserva.find(listaReserva => listaReserva.id === id);
  }


}
