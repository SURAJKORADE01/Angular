import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousPipe } from './marvellous.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarvellousPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomPipe';
}
