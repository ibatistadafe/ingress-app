import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-verde',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao-verde.component.html',
  styleUrl: './botao-verde.component.scss'
})
export class BotaoVerdeComponent {
  @Input() descricao: string;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem() {
    this.newItemEvent.emit();
  }
}
