import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  count: {{count}}
  <hr>
  <button (click)="increaseBy()">add</button>
  <button (click)="decreaseBy()">remove</button>` ,
  standalone: true
  
})

export class CounterComponent{
  public count: number = 0;
  increaseBy(): void {
  this.count++;
  }
  decreaseBy(): void {
  this.count--;
  }
}