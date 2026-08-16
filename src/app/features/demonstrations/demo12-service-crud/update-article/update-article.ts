import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../../core/services/article/article-service';
import { Article } from '../../../exercices/exo07-input-output/article.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-article',
  imports: [FormsModule],
  templateUrl: './update-article.html',
  styleUrl: './update-article.css',
})
export class UpdateArticle implements OnInit {
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

  update(){
    this.articleService.updateArticle(this.article)
    this.router.navigateByUrl('/demo-service')
  }

}
