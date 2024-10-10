import { Injectable } from '@angular/core';
import { ReservaType } from '../../../reseva';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResevaService {
  baseUrl = "http://localhost:3001/reservas"

  constructor(private http: HttpClient){ }

  //esta puxando todas as reservas
  getAllReservas(): Observable<ReservaType[]> {
    return this.http.get<ReservaType[]>(this.baseUrl);
  }

  //esta puxando por id
  getReservaId(id: string): Observable<ReservaType[]> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ReservaType[]>(url);
    //return this.listarReserva.find(listaReserva => listaReserva.id === id);
  }


}
