import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bitsToKbs',
})
export class BitsToKbsPipe implements PipeTransform {
  transform(size: number): string {
    return Math.ceil(size / 1024) + ' KB';
  }
}
