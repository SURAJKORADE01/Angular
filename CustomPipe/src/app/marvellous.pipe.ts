import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous',
  standalone: true
})

export class MarvellousPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Inside Marvellous Pipe";
  }
}