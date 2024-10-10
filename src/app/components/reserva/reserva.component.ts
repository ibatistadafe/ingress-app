import { ReservaType } from './../../../reseva';
import { Component, Input } from '@angular/core';
import { StatusPagamentoPipe } from "../../services/reserva/status-pagamento.pipe";

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [StatusPagamentoPipe],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss'
})
export class ReservaComponent {
  @Input() reserva!: ReservaType;
}
