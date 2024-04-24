import { NgxMaskDirective } from 'ngx-mask';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-zip-form',
  standalone: true,
  imports: [FormsModule, CommonModule,NgxMaskDirective],
  templateUrl: './zip-form.component.html',
  styleUrl: './zip-form.component.scss'
})
export class ZipFormComponent {
  form = {
    zipcode: '',
    number:  '',
    complement: ''
  }

  constructor(private route: Router){ }

  onSubmit(): void{
    console.log(JSON.stringify(this.form, null, 2));
    this.route.navigate(["/password"]);
  }

  onResed(form: NgForm):void{
    form.reset()
  }
}
