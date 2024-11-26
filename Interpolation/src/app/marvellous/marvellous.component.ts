import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
    public BatchName : string = "Python ML";

    DemoFun() : string
    {
      return "Inside DemoFun Function"
    }

    Display() : void
    {
      console.log("Inside Display");
    }
}
