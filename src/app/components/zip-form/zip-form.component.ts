import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zip-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './zip-form.component.html',
  styleUrl: './zip-form.component.scss'
})
export class ZipFormComponent {
  form = {
    zip: '',
    number:  '',
    complement: ''
  }

  constructor(private route: Router){ }

  onSubmit(): void{
    console.log("testando")
    this.route.navigate(["/password"]);
  }

  onResed():void{}
}
