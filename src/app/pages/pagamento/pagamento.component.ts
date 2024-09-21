import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BotaoVerdeComponent } from "../../components/botao-verde/botao-verde.component";

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [HeaderComponent, BotaoVerdeComponent],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.scss'
})
export class PagamentoComponent {

}
