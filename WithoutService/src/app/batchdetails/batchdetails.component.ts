import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent 
{
  public Batches = [
    {"Name" : "PPA","Duration" : "4 Months","Fees" : 20000},
    {"Name" : "LB","Duration" : "3.5 Months","Fees" : 21000},
    {"Name" : "Angular","Duration" : "4 Months","Fees" : 21500}
  ]
}
