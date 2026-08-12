import { Component, inject, OnInit, signal } from '@angular/core';
import { Article } from '../../../exercices/exo07-input-output/article.model';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../../core/article/article-service';

@Component({
  selector: 'app-list-article',
  imports: [CommonModule],
  templateUrl: './list-article.html',
  styleUrl: './list-article.css',
})
export class ListArticle implements OnInit{
  
  // données dans le composant
  listArticles = signal<Article[]>([])
  
  // injection du service
  articleService = inject(ArticleService)
  
  // appel du service à la construction du composant
  ngOnInit(): void {
    this.listArticles = this.articleService.GetAllArticles()
  }

  deleteArticle(id : number){
    this.articleService.deleteArticle(id)
  }

}
