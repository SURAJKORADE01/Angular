import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatchlistsComponent } from './batchlists/batchlists.component'
import { BatchdetailsComponent } from './batchdetails/batchdetails.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BatchlistsComponent,BatchdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WithoutService';
}
