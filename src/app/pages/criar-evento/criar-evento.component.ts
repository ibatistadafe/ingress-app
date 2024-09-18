import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { EventosService } from '../../services/eventos/eventos.service';
import { Eventos } from '../../model/eventos/eventos.model';

@Component({
  selector: 'app-criar-evento',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.scss']
})
export class CriarEventoComponent implements OnDestroy {
  form: FormGroup;
  imageUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private service: EventosService
  ) {
    this.form = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      localizacao: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      arquivo: new FormControl(null, [Validators.required])
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    
    if (file) {
      // Limitar o tamanho do arquivo para 5 MB
      if (file.size > 5 * 1024 * 1024) {
        alert('Por favor, selecione um arquivo menor que 5 MB.');
        this.form.patchValue({ arquivo: null });
        return;
      }

      if (file.type.startsWith('image/')) {
        if (this.imageUrl) {
          URL.revokeObjectURL(this.imageUrl);
        }

        this.imageUrl = URL.createObjectURL(file);
        this.form.patchValue({ arquivo: file });
      } else {
        this.imageUrl = null;
        alert('Por favor, selecione uma imagem válida.');
      }
    }
  }

  public criarEvento() {
    if (this.form.valid) {
      const file = this.form.get('arquivo')?.value;
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const base64String = event.target.result.split(',')[1]; // Extrai a parte base64

        const evento: Eventos = {
          nome: this.form.get('nome')?.value,
          descricao: this.form.get('descricao')?.value,
          localizacao: this.form.get('localizacao')?.value,
          valor: this.form.get('valor')?.value,
          data: this.form.get('data')?.value,
          arquivo: base64String // Armazena a string base64
        };

        this.service.criarEvento(evento).subscribe(
          response => {
            console.log('Evento criado com sucesso:', response);
            this.form.reset(); // Reseta o formulário após sucesso
            this.imageUrl = null; // Limpa a imagem exibida
          },
          error => {
            console.error('Erro ao criar evento:', error);
          }
        );
      };

      reader.readAsDataURL(file); // Lê o arquivo como URL de dados
    }
  }

  ngOnDestroy(): void {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
  }
}
