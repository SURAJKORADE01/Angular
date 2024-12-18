import { Component } from '@angular/core';    // by default
import { BatchesService } from '../batches.service'; // service import keli
import { CommonModule } from '@angular/common'; // for *ngFor

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css',
  providers : [BatchesService]    // optional aahe -> kontya hi angular version la code run honya sathi -> constructor la lagnari entry providers array madhe aaste
})

// Design Pattern cha naav aahe -> Dependency Injection 

export class BatchlistComponent 
{
  // rikami pishvi
  public batches : any = [];

  // Batchlist component ne BatchService hya service la DI use karun swata madhe inject kela
  
  // Constructor madhun aapn BatchService madhe aasnarya service la subscribe kela -> joh compponent subscribe karel tyalach service data deil
  public constructor(private sobj : BatchesService)
  {                              // input parameter data => this.batches madhe data de
    sobj.GetBatches().subscribe(data => this.batches = data);
    // sobj-> service cha object 
    // call kela -> GetBatches() function hai immediately data pathvnaar nahi -> subscribe() -> data yeil tevaan milel
    // data aala tr toh batches madhe de 

    // this.batches = data -> data madhe yenara input this.batches madhe taak 
    // this.batches = data -> Function logic
    // data => input parameter
  }
}