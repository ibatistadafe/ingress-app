import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReservaComponent } from "../../components/reserva/reserva.component";
import { ResevaService } from '../../services/reserva/reseva.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlterarReservaService } from '../../services/reserva/alterar-reserva.service';
import { Router } from '@angular/router';
import { VIDEO_CONFIG } from '../../model/scanner.const';
import jsQR from 'jsqr';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-buscar-reserva',
  standalone: true,
  imports: [HeaderComponent, ReservaComponent, CommonModule, FormsModule],
  templateUrl: './buscar-reserva.component.html',
  styleUrls: ['./buscar-reserva.component.scss']
})
export class BuscarReservaComponent implements AfterViewInit {
  @ViewChild('videoElement') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef;

  videoStream!: MediaStream;
  config = structuredClone(VIDEO_CONFIG);
  private destroy$ = new Subject<void>();
  result = '';
  qrReaderIsOpen: boolean = false;
  codigo!: number;
  evento: any = null;
  erro: string = '';
  pago: boolean = false;

  constructor(
    private resevaService: ResevaService,
    private alterarReservaService: AlterarReservaService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngAfterViewInit(): void { }

  async prepareScanner() {
    const available = await this.checkCamera();
    if (available) this.startScanner();
  }

  changeCamera() {
    let { facingMode } = this.config.video;
    this.config.video.facingMode = facingMode === 'environment' ? 'user' : 'environment';
    this.startScanner();
  }

  async startScanner() {
    this.videoStream = await navigator.mediaDevices.getUserMedia(this.config);
    this.video.nativeElement.srcObject = this.videoStream;
    this.spyCamera();
  }

  spyCamera() {
    if (this.video.nativeElement) {
        const { clientWidth, clientHeight } = this.video.nativeElement;
        this.canvas.nativeElement.width = clientWidth;
        this.canvas.nativeElement.height = clientHeight;

        const canvas = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
        canvas.drawImage(this.video.nativeElement, 0, 0, clientWidth, clientHeight);

        const inversionAttempts = 'dontInvert';
        const image = canvas.getImageData(0, 0, clientWidth, clientHeight);
        const qrcode = jsQR(image.data, image.width, clientHeight, { inversionAttempts });

        if (qrcode) {
            console.log('QR Code detected:', qrcode.data); // Log para depuração
            this.codigo = Number(qrcode.data);
            this.buscarEvento();
        } else {
            console.log('QR Code not found, trying again...'); // Log para depuração
            timer(100).pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.spyCamera();
            });
        }
    }
}


  async checkCamera() {
    if (!('mediaDevices' in navigator) || !('getUserMedia' in navigator.mediaDevices)) {
      alert("Navegador não suporta acesso à câmera.");
      return false;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop()); // Para parar a câmera após a verificação
      return true; // Permissão concedida
    } catch (error) {
      alert("Não conseguimos acesso à câmera, por favor verifique");
      return false; // Permissão negada
    }
  }

  ngOnDestroy() {
    this.videoStream.getTracks().forEach((track) => track.stop());
    this.video = null!;
    this.destroy$.next();
    this.destroy$.complete();
  }

  buscarEvento() {
    this.resevaService.getEventoByCodigo(this.codigo).subscribe({
      next: (data) => {
        this.evento = data?.length ? data[0] : null;
        this.erro = this.evento ? '' : 'Reserva não encontrada.';
      },
      error: () => {
        this.erro = 'Erro ao buscar o evento.';
        this.evento = null;
      }
    });
  }

  buscarEventoQr() {
    this.qrReaderIsOpen = true;
    this.prepareScanner(); // Chama a função para preparar o scanner
  }

  onStatusChange(status: boolean) {
    const codigo = this.evento.codigo;
    const subscription = this.alterarReservaService.putAlterarReserva(codigo, status).subscribe({
      next: (response) => {
        console.log('Reserva alterada com sucesso', response);
        this.evento.status = status;
        this.buscarEvento();  // Refaz a busca após a atualização do status
        this.cdr.detectChanges();
        subscription.unsubscribe();
      },
      error: (error) => {
        console.error('Erro ao alterar a reserva', error);
        subscription.unsubscribe();
      }
    });
  }

  redirecionarHome() {
    this.router.navigate(['/lista-eventos']);
  }
}
