import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})

export class BatchdetailsComponent 
{
  public Batches : any = [];

  public constructor(private batchobj : BatchesService)
  {
    this.Batches = batchobj.GetBatches();
  }
}
