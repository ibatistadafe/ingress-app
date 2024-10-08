import { ReservaType } from './../../../reseva';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss'
})
export class ReservaComponent {
  @Input() reserva!: ReservaType;
}
