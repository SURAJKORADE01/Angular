import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})

export class MarvellousComponent 
{
  CheckEven(no : number)
  {
      if(no % 2 == 0)
      {
          return 1;
      }
      else
      {
          return 0;
      }

  }
  counter = 0;

  Increment()
  {
    this.counter++;
  }

  Decrement()
  {
    this.counter--;
  }

  Batches()
  {
    return ['PPA','LB','Angular','Python'];
  }

  Display(student : any)
  {
    return student + ' welcome to Marvellous Infosystems'
  }
}
