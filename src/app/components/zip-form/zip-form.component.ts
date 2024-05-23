import { NgxMaskDirective } from 'ngx-mask';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { ZipcodeData } from '../zip-form.model';
import { ZipFormService } from '../../service/zip-form.service';

@Component({
  selector: 'app-zip-form',
  standalone: true,
  imports: [FormsModule, CommonModule,NgxMaskDirective],
  templateUrl: './zip-form.component.html',
  styleUrl: './zip-form.component.scss'
})
export class ZipFormComponent {
  form : ZipcodeData = {
    zipcode: "",
    number:  "",
    complement: ""
  }

  constructor(private route: Router, private userZip : ZipFormService){ }

  onSubmit(): void{
    try{
      this.userZip.registerZipcodeData(this.form).subscribe(()=>{
        console.log(JSON.stringify(this.form, null, 2));
        this.route.navigate(["/password"]);
      })
    }catch(error){
      console.log(`Deu erro ${error}`)
    }

  }

  onResed(form: NgForm):void{
    form.reset()
  }
}
