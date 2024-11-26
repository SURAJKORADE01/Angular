import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { PpaComponent } from './ppa/ppa.component';
import { PythonComponent } from './python/python.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarvellousComponent,PythonComponent,PpaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inline';
}
