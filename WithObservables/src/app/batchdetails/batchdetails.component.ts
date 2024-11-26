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
  // Array 
  public batches : any = [];

  // BatchesService hya service inject kela
  public constructor(private sobj : BatchesService)
  { 
  // GetBatches function la call kela aani tyachya kadun je kahi yeil 
  // te batches array madhe thev -> this.batches = data

  // Observables madhla subscribe word use kela
    sobj.GetBatches().subscribe(data => this.batches = data);
  }
}
