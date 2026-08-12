import { Component, inject } from '@angular/core';
import { Article } from '../../../exercices/exo07-input-output/article.model';
import { ArticleService } from '../../../../core/article/article-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.html',
  styleUrl: './add-article.css',
})
export class AddArticle {

  // instance pour  la récupération des données
  article : Article = {
    id : 0,
    name : '',
    description : '',
    price : 0,
    stock : 0
  }

  // injection du service
  articleService = inject(ArticleService)

  addArticle(){
    this.articleService.addArticle(this.article)
  }
}
