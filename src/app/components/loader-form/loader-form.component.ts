import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-form',
  standalone: true,
  imports: [],
  templateUrl: './loader-form.component.html',
  styleUrl: './loader-form.component.scss'
})
export class LoaderFormComponent {
  @Input() width: string;
}
