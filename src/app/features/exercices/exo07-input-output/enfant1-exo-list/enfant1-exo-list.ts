import { Component, output } from '@angular/core';
import { Article } from '../article.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enfant1-exo-list',
  imports: [FormsModule],
  templateUrl: './enfant1-exo-list.html',
  styleUrl: './enfant1-exo-list.css',
})
export class Enfant1ExoList {

  emitteurAdd = output<Article>()

  article : Article = {
    id : 0,
    name : '',
    description : '',
    price : 0,
    stock : 0
  }

  addArticle(){
    this.emitteurAdd.emit(this.article)
  }
}
