import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css',
  providers : [BatchesService]
})

export class BatchdetailsComponent 
{
  public batches : any = [];

  public constructor(private sobj : BatchesService)
  {
    sobj.GetBatches().subscribe(data => this.batches = data);
  }
}
