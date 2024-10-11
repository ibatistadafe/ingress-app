import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../services/eventos/eventos.service';
import { Eventos, Ingresso, Ticket, TicketsPackage } from '../../model/eventos/eventos.model';
import { HeaderComponent } from "../../components/header/header.component";
import { BotaoVerdeComponent } from '../../components/botao-verde/botao-verde.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { cpfValidator } from '../../validators/cpf.validator';
import { RandomIdService } from '../../services/eventos/random-id.service';
import { IngressosService } from '../../services/ingressos/ingressos.service';
import { NgToastModule } from 'ng-angular-popup';
import { NgToastService } from 'ng-angular-popup'
import { ToasterPosition } from 'ng-angular-popup';

@Component({
  selector: 'app-evento',
  standalone: true,
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss'],
  imports: [CommonModule, HeaderComponent, BotaoVerdeComponent, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe, NgToastModule],
  providers: [provideNgxMask()]
})
export class EventoComponent implements OnInit {
  ToasterPosition = ToasterPosition;
  public evento: Eventos;
  public quantidadeIngressos: number = 0;
  public descricaoBotao = "Adicionar";
  public form: FormGroup;
  public tickets: TicketsPackage = new TicketsPackage(); //Tickets que serao emitidos para a tela de checkout com id

  public isAccordionOpen: boolean = false;
  public isAccordionOpenCheckout: { [key: string]: boolean } = {};
  public ingressos: any[] = []; // Array para armazenar ingressos
  public ingressosCheckout: any = [];
  public totalIngressos: number;
  public valorIngresso: number;

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService,
    private fb: FormBuilder,
    private randomIdService: RandomIdService,
    private router: Router,
    private ingressService: IngressosService,
    private toast: NgToastService,
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
      cpf: new FormControl('', [Validators.required, cpfValidator()]),
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
    if (this.quantidadeIngressos === 0) {
      this.quantidadeIngressos = 1;
    } else {
      this.quantidadeIngressos++;
    }
    
    const novoIngresso = this.form.value;
    
    // Verifica se o ingresso já existe na lista
    const exists = this.ingressosCheckout.some((ingresso: Ingresso) => ingresso.nome === novoIngresso.nome);
    
    if (!exists && novoIngresso.nome) {
      this.ingressosCheckout.push(novoIngresso);
    }
  
    this.totalIngressos = this.calcularValorTotal();
    this.form.reset();
  }
  

  verificaIgualdade(array) {
    this.ingressosCheckout = array.filter((item, index) => array.indexOf(item) === index);
  } 

  public excluirIngresso(ingresso: Ticket) {
    const index = this.ingressosCheckout.indexOf(ingresso);
    if (index > -1) {
      this.ingressosCheckout.splice(index, 1);
  
      // Recalcula o valor total após a exclusão
      this.totalIngressos = this.calcularValorTotal();
      this.quantidadeIngressos--;
    }
    this.isAccordionOpen = false;
  }
  

  public goCheckout() {
    this.tickets.total = this.calcularValorTotal();
    this.tickets.tickets =  [...this.ingressosCheckout];
    this.tickets.nomeEvento = this.evento.nome;
    this.tickets.codigo = Number(this.randomIdService.generateUniqueId());
    this.tickets.pago = false;

    this.ingressService.criarIngressos(this.tickets).subscribe({
      next: (response) => {
        console.log('Ingressos criados com sucesso:', response);
        const ingressosString = JSON.stringify(this.tickets);
        this.router.navigate(['/checkout'], { queryParams: { data: ingressosString } });
      },
      error: (error) => {
        console.error('Erro ao criar ingressos:', error);
          this.toast.danger("Erro ao criar pacote de ingressos", "Erro", 5000);
      }
    });
  }
  
}
