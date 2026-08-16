import { Component, inject } from '@angular/core';
import { Article } from '../../../exercices/exo07-input-output/article.model';
import { ArticleService } from '../../../../core/services/article/article-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.html',
  styleUrl: './add-article.css',
})
export class AddArticle {

  // instance pour  la récupération des données ( pseudo-formulaire)
  article : Article = {
    id : 0,
    name : '',
    description : '',
    price : 0,
    stock : 0
  }

  // injection du service
  articleService = inject(ArticleService)

  // injection du router pour permettre de déclencher la navigation lors d'un evenement
  router = inject(Router)

  // methode pour l'action du composant
  addArticle(){
    // appel du service
    this.articleService.addArticle(this.article)

    // redirection de l'utilisateur vers la page list article
    this.router.navigateByUrl('/demo-service');
  }
}
