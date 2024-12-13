import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MarvellousComponent } from './marvellous/marvellous.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AlertModule,MarvellousComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MarvellousBootstrap';
}
