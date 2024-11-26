import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent 
{
  public Batches : any = [];
  
  public constructor(private batchobj : BatchesService)
  {
    this.Batches = batchobj.GetBatches();
  }
}
