import { Component, Input } from '@angular/core';
import { StatusPagamentoPipe } from "../../services/reserva/status-pagamento.pipe";
import { TicketsPackage } from '../../model/eventos/eventos.model';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [StatusPagamentoPipe],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss'
})
export class ReservaComponent {
  @Input() reserva!: TicketsPackage;
}
