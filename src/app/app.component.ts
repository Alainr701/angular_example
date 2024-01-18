import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.components';
import { HeroComponent } from './heroes/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CounterComponent,HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'My app';


}
