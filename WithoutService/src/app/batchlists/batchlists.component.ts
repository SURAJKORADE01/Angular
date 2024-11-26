import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-batchlists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlists.component.html',
  styleUrl: './batchlists.component.css'
})
export class BatchlistsComponent {
  public Batches = [
    {"Name" : "PPA","Duration" : "4 Months","Fees" : 20000},
    {"Name" : "LB","Duration" : "3.5 Months","Fees" : 21000},
    {"Name" : "Angular","Duration" : "4 Months","Fees" : 21500}
  ]
}
