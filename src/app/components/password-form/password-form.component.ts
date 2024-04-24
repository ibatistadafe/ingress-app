import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule, NgForm, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [FormsModule, CommonModule,NgxMaskDirective],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.scss'
})
export class PasswordFormComponent {
  form = {
    password: '',
    confirmPassword:  '',
    member: null
  };

  constructor(private router: Router){ }

  // Função de validação para comparar as senhas
  checkPasswords(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      return password === confirmPassword ? null : { notSame: true };
    };
  }

  onSubmit(): void {
      console.log(JSON.stringify(this.form, null, 2));
      this.router.navigate(["/success"]);
  }

  onReset(form: NgForm): void {
    form.resetForm();
  }
}
