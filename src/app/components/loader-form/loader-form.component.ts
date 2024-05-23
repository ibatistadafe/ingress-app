import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../service/loader.service';


@Component({
  selector: 'app-loader-form',
  standalone: true,
  imports: [],
  templateUrl: './loader-form.component.html',
  styleUrls: ['./loader-form.component.scss']
})
export class LoaderFormComponent implements OnInit, OnDestroy {
  @ViewChild('loader') loader: ElementRef<any> | undefined;
  private subscription: Subscription | undefined;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.subscription = this.loaderService.progress$.subscribe(progress => {
      this.advanceProgress(progress);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  advanceProgress(novoWidth: string): void {
    const loaderEl = this.loader?.nativeElement;
    if (loaderEl) {
      loaderEl.style.width = novoWidth;
    }
  }
}
