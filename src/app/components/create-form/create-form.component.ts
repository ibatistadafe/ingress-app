import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {
  createForm!: FormGroup

  constructor(private fb: FormBuilder){
    this.createForm = this.fb.group({
      fullname: ['', Validators.required]
    })
  }

  // ngOnInit(): void{
  //   this.createForm = new FormGroup({
  //     id: new FormControl(''),

  //     // cpf: new FormControl('', [Validators.required]),
  //     // email: new FormControl('', [Validators.required]),
  //     // emailConfirm: new FormControl('', [Validators.required]),
  //     // date: new FormControl('', [Validators.required]),
  //     // phone: new FormControl('', [Validators.required]),
  //   })
  // }



  submitForm(){
    console.log("aqui vão estar os dados do forms")
  }
}
