import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private dataSource = new BehaviorSubject<string>('Pokédex');
  title$ = this.dataSource.asObservable();

  constructor() { }

  updateTitle(text: string): void {
    this.dataSource.next(text);
  }
}
