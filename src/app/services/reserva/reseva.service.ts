import { Injectable } from '@angular/core';
import { ReservaType } from '../../../reseva';

@Injectable({
  providedIn: 'root'
})
export class ResevaService {
  protected listarReserva: ReservaType[] = [
    {
      id: "#d8f5s5df",
      qrcode: "../../../assets/image/qrcode.png",
      qtdReserva: 5,
      statusPagamento: true,
    },
    {
      id: "#d8f5s5df",
      qrcode: "../../../assets/image/qrcode.png",
      qtdReserva: 2,
      statusPagamento: true,
    },
    {
      id: "#895s5df",
      qrcode: "../../../assets/image/qrcode.png",
      qtdReserva: 1,
      statusPagamento: false,
    }
  ]

  //esta puxando todas as reservas
  getAllReservas(): ReservaType[] {
    return this.listarReserva;
  }

  //esta puxando por id
  getReservaId(id: string): ReservaType | undefined {
    return this.listarReserva.find(listaReserva => listaReserva.id === id);
  }

}
