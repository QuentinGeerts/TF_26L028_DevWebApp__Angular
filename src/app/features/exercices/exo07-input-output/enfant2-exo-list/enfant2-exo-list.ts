import { Component, input, output } from '@angular/core';
import { Article } from '../article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enfant2-exo-list',
  imports: [CommonModule],
  templateUrl: './enfant2-exo-list.html',
  styleUrl: './enfant2-exo-list.css',
})
export class Enfant2ExoList {

  // récupération de la liste
  listArticle = input<Article[]>()

  // relation avec le parent
  emmeteurSuppression = output<number>()

  // methode déclencher par l'enfant 
  removeArticle(id : number){
    this.emmeteurSuppression.emit(id)
  }
}
