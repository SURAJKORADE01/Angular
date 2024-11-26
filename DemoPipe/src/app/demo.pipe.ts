import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
  standalone: true
})

export class DemoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    var str;

    if(args[0] == "PPA")
    {
      str = value + "Batch which covers Fundamentals of Programming";
    }
    else if(args[0] == "LB")
    {
      str = value + "Batch which covers Programming Logic";
    }
    else if(args[0] == "Angular")
    {
      str = value + "Batch which covers Web Development";
    }
    else
    {
      str = "Sorry we don't have such batch.";
    }

    return str;
  }
}