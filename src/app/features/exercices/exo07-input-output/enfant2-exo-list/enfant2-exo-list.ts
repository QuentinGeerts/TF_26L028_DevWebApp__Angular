import { Component, input, output } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-enfant2-exo-list',
  imports: [],
  templateUrl: './enfant2-exo-list.html',
  styleUrl: './enfant2-exo-list.css',
})
export class Enfant2ExoList {

  listArticle = input<Article[]>([])

  emetteurRemove = output<number>()

  removeArticle(id : number){
    this.emetteurRemove.emit(id)
  }
}
