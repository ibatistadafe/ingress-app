import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomIdService {
  private generatedIds: Set<string>;

  constructor() {
    this.generatedIds = new Set<string>();
  }

  generateUniqueId(): string | null {
    if (this.generatedIds.size >= 10000) {
      // Limite de 10.000 IDs únicos (0000 a 9999)
      return null;
    }

    let id: string;
    do {
      id = this.getRandomId();
    } while (this.generatedIds.has(id));

    this.generatedIds.add(id);
    return id;
  }

  private getRandomId(): string {
    return String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  }
}
