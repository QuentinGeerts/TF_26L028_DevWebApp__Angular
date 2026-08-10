import { Pipe, PipeTransform, signal } from '@angular/core';

import { count } from 'rxjs';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    
    const minutes = Math.floor(value / 60);
    const secondes = Math.floor(value % 60);

    return `${minutes} m : ${secondes} s`
  }
}
