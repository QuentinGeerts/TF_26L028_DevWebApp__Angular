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

  articles = signal<Article[]>([
    {
      id : 1,
      name : 'product 1',
      description : 'description 1',
      price : 10.99,
      stock : 10
      
    }
  ])

  lastId = signal<number>(this.articles()[this.articles().length - 1].id + 1)

  addArticle(newArticle : Article){
    newArticle.id = this.lastId()

    this.articles.update((a) => [...a , newArticle])

    this.lastId.update((v) => v += 1)
  }

  removeArticle(id : number){
    this.articles.update((list) => list.filter((article) => article.id !== id))
  }
  
}
