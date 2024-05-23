
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private progressSource = new Subject<string>();
  progress$ = this.progressSource.asObservable();

  setProgress(progress: string): void {
    this.progressSource.next(progress);
  }

}
