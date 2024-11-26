import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css',
  providers : [BatchesService]
})

export class BatchlistComponent 
{
  public batches : any = [];

  // Component madhe service la inject kela using DI
  public constructor(private sobj : BatchesService)
  {
      sobj.GetBatches().subscribe(data => this.batches = data);
  }
}
