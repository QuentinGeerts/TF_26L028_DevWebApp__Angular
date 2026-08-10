import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiPipePipe } from '../emoji-pipe-pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmojiPipePipe
  ],
  exports: [
    EmojiPipePipe,
    CommonModule
  ]
})
export class SharedModule {}
