import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiPipe',
})
export class EmojiPipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value
    .replace('chien' , '🐶')
    .replace('chat' , '🐱')
    .replace('souris' , '🐭')
    .replace('lapin' , '🐰')
    .replace('renard' , '🦊')
  }
}
