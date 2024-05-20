
import { Component } from '@angular/core';
import { FormsModule,  NgForm} from '@angular/forms';


import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { Router } from '@angular/router';
import { PersonalData } from '../create-form.model';
import { CreateFormService } from '../../service/create-form.service';




@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {
  form : PersonalData= {
    fullname: '',
    cpf: 0,
    email: '',
    confirmEmail: '',
    dateBirthDay: new Date(),
    phone: 0
  }

  constructor(private router: Router,private user: CreateFormService ){ }

  onSubmit(): void {
    //aqui preciso chamar um metodo que consome api
    try{
      this.user.registerUserData(this.form).subscribe(()=>{
        console.log(JSON.stringify(this.form, null, 2));
        this.router.navigate(["/zipcode"]);
      })
    }catch(error){
      console.log(`Deu erro ${error}`)
    }

  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
