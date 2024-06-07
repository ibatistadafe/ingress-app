import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/autenticacao/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  constructor
    (
      private fb: FormBuilder,
      private _authService: AuthService,
      private router: Router

      
    ) {
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    })
  }


  autentica() {
    this._authService.login(
      this.form.value.login,
       this.form.value.senha
    ).subscribe({
      next: () => {
        this.router.navigate(['/lista-eventos'])
      },
      error: () => {}
    })
  }

}
