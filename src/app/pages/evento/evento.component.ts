import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../services/eventos/eventos.service';
import { Eventos, Ingresso } from '../../model/eventos/eventos.model';
import { HeaderComponent } from "../../components/header/header.component";
import { BotaoVerdeComponent } from '../../components/botao-verde/botao-verde.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento',
  standalone: true,
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss'],
  imports: [CommonModule, HeaderComponent, BotaoVerdeComponent, ReactiveFormsModule]
})
export class EventoComponent implements OnInit {
  public evento: Eventos;
  public quantidadeIngressos: number;
  public descricaoBotao = "Adicionar";
  public form: FormGroup;

  // Variáveis para o acordeão
  public isAccordionOpen: boolean = false;
  public isAccordionOpenCheckout: { [key: string]: boolean } = {};
  public ingressos: any[] = []; // Array para armazenar ingressos
  public ingressosCheckout: any[] = [];
  public totalIngressos: number;

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const eventoId = params['id'];
      if (eventoId) {
        this.buscarEventoPorId(eventoId);
      }
    });
    this.form = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      telefone: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
    })
  }

  private buscarEventoPorId(id: string) {
    this.eventosService.buscarEventoPorId(id).subscribe({
      next: (evento: Eventos) => {
        this.evento = evento[0];
        if (this.evento.arquivo && typeof this.evento.arquivo === 'object' && 'data' in this.evento.arquivo) {
          this.evento.arquivo = this.arrayBufferToBase64(this.evento.arquivo.data as number[]);
        }
      },
      error: (error) => {
        console.log("Erro ao buscar o evento:", error);
      }
    });
  }

  private arrayBufferToBase64(buffer: number[]): string {
    const chunks: string[] = [];
    const chunkSize = 65536; // Tamanho máximo para cada chunk
    for (let i = 0; i < buffer.length; i += chunkSize) {
      const chunk = buffer.slice(i, i + chunkSize);
      const binary = String.fromCharCode(...chunk);
      chunks.push(binary);
    }
    return window.btoa(chunks.join('')); // Converte a string completa para base64
  }

  public eventoIsGratuito(valorEvento: number): boolean {
    return valorEvento <= 0;
  }

  adicionarIngressos() {
    if(this.quantidadeIngressos == 0) {
      this.quantidadeIngressos = 1;
    } else {
      this.quantidadeIngressos++;
    }
    this.totalIngressos = this.evento.valor * this.quantidadeIngressos;
  }

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }

  toggleAccordionCheckout(item: string) {
    this.isAccordionOpenCheckout[item] = !this.isAccordionOpenCheckout[item];
  }

  calcularValorTotal(): number {
    return this.eventoIsGratuito(this.evento.valor) ? 0 : this.evento.valor * this.quantidadeIngressos;
  }

  emitChart() {
    this.ingressos.push(this.form.value);
    this.ingressos.forEach((ingresso: Ingresso) => {
      if(ingresso.nome != null) {
        this.ingressosCheckout.push(ingresso);
      }
    });
    console.log(this.ingressos);
    console.log(this.ingressosCheckout);
    this.form.reset();
    this.verificaIgualdade(this.ingressosCheckout);
  }

  verificaIgualdade(array) {
    this.ingressosCheckout = array.filter((item, index) => array.indexOf(item) === index);
  } 
}
