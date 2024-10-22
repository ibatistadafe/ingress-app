import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlterarReservaService {
  baseurl = "http://localhost:3000/reserva/ingressos";

  constructor(private http: HttpClient) { }

  putAlterarReserva(codigo: number, status:boolean): Observable<any>{
    const body = {
      codigo,
      status
    }

    return this.http.put<any>(`${this.baseurl}/${codigo}`, body);
  }

}
