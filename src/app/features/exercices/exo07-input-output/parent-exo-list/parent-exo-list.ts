import { Component, signal } from '@angular/core';
import { Enfant1ExoList } from "../enfant1-exo-list/enfant1-exo-list";
import { Enfant2ExoList } from "../enfant2-exo-list/enfant2-exo-list";
import { Article } from '../article.model';

@Component({
  selector: 'app-parent-exo-list',
  imports: [Enfant1ExoList, Enfant2ExoList],
  templateUrl: './parent-exo-list.html',
  styleUrl: './parent-exo-list.css',
})
export class ParentExoList {

  listArticle = signal<Article[]>([
    {
      id : 1,
      name : '1',
      description : 'desc 1',
      price : 1,
      stock : 1
    }
  ])

  lastId = this.listArticle()[this.listArticle().length - 1]. id + 1

  addArticle(newArticle : Article){
    newArticle.id = this.lastId

    this.listArticle.update((v) => [...v,newArticle])

    this.lastId += 1
  }

  removeArticle(id : number){
    this.listArticle.set(this.listArticle().filter((a) =>a.id !== id))
  }
}
