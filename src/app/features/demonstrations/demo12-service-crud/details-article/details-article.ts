import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArticleService } from '../../../../core/services/article/article-service';
import { Article } from '../../../exercices/exo07-input-output/article.model';

@Component({
  selector: 'app-details-article',
  imports: [RouterLink],
  templateUrl: './details-article.html',
  styleUrl: './details-article.css',
})
export class DetailsArticle implements OnInit{
  activatedRoute = inject(ActivatedRoute)

  articleService = inject(ArticleService)

  router = inject(Router)

  article : Article = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0    
  }
  ngOnInit(){
    const id = +this.activatedRoute.snapshot.params['id']
    this.article = this.articleService.getArticleById(id)
  }

  navigateToUpdate(){
    this.router.navigate(['/demo-service/update-article',this.article.id])
  }
}
