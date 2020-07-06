import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor',
})
export class AppendorPipe implements PipeTransform {
  transform(input: string, position: string, texttoappend: string): string {
    return position === 'pre' ? texttoappend + input : input + texttoappend;
  }
}
