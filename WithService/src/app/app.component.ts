import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BatchlistComponent,BatchdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}