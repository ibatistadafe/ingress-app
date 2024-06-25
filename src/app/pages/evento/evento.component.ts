import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BotaoVerdeComponent } from "../../components/botao-verde/botao-verde.component";

@Component({
    selector: 'app-evento',
    standalone: true,
    templateUrl: './evento.component.html',
    styleUrl: './evento.component.scss',
    imports: [HeaderComponent, BotaoVerdeComponent]
})
export class EventoComponent {
  descricaoBotao = 'Adicionar';


  teste() {
    console.log('deu certo')
  }
}
