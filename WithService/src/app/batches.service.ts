import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BatchesService 
{
  constructor() 
  { 
    
  }

  public GetBatches()
  {
    return [
      {"Name" : "PPA", "Duration" : "4 Months", "Fees" : 20000},
      {"Name" : "LB", "Duration" : "3.5 Months", "Fees" : 21000},
      {"Name" : "Angular", "Duration" : "4.5 Months", "Fees" : 21500}
    ]
  }
}
