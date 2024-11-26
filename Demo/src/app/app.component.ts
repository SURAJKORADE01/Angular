import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PPAComponent } from './ppa/ppa.component';

@Component({
  selector: 'app-root',
  standalone: true,
import { PPAComponent } from './ppa/ppa.component';
  imports: [RouterOutlet,PPAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';
}
