import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { ArticleService } from '../../../../core/services/article/article-service';

@Component({
  selector: 'app-routage-service',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './routage-service.html',
  styleUrl: './routage-service.css',
  providers : [ArticleService]
})
export class RoutageService {}
