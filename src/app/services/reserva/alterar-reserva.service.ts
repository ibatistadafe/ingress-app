import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlterarReservaService {
  baseurl = "https://4361-2804-7f0-471-c2d-6bad-6cd7-e100-8670.ngrok-free.app/reserva/ingressos";

  constructor(private http: HttpClient) { }

  putAlterarReserva(codigo: number, status:boolean): Observable<any>{
    const body = {
      codigo,
      status
    }

    return this.http.put<any>(`${this.baseurl}/${codigo}`, body);
  }

}
