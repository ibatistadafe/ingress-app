import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { PasswordData } from './password-form.model';
import { PasswordFormService } from '../../service/password-form.service';
import { LoaderService } from '../../service/loader.service';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [FormsModule, CommonModule,NgxMaskDirective],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.scss'
})
export class PasswordFormComponent {
  form : PasswordData = {
    password: '',
    confirmPassword:  '',
    member: false
  };

  updateMemberValue(checked: boolean): void{
    this.form.member = checked;
  }

  constructor(private router: Router, private userPassword: PasswordFormService, private loaderService: LoaderService ){ }
  onSubmit(): void {
    this.loaderService.setProgress("100%")
    try{
      if(this.form.password === this.form.confirmPassword){
        this.userPassword.registerUserPassword(this.form).subscribe(()=>{
          console.log(JSON.stringify(this.form, null, 2));
          this.router.navigate(["/success"]);
        })
      }else{
        window.alert("as senhas estão diferentes!")
      }
    }catch(error){
      console.log(`Deu erro ${error}`)
    }
  }

  onReset(form: NgForm): void {
    form.resetForm();
  }
}
