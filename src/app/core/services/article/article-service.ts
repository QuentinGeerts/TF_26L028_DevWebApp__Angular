import { inject, Service, signal } from '@angular/core';
import { Article } from '../../../features/exercices/exo07-input-output/article.model';
import { AuthService } from '../auth/auth-service';

@Service()
export class ArticleService {

// le service peut faire requettes vers le back-end

// simulation d'une Db
    listeArticles = signal<Article[]>([
        {
            id : 1,
            name : 'pc',
            description : 'un ordinateur de bureau',
            price : 699.99,
            stock : 10
            
        }
    ])
    lastId = signal<number>(this.listeArticles()[this.listeArticles().length - 1].id + 1)


    authService = inject(AuthService)

    addArticle(newArticle :Article){
        
        newArticle.id = this.lastId()
        this.listeArticles.update((list) => [...list , newArticle])

        this.lastId.update((v) => v += 1)
    }

    GetAllArticles(){
        return this.listeArticles
    }

    getArticleById(id : number){
        const index = this.listeArticles().findIndex((a) => a.id == id)

        return this.listeArticles()[index]
    }

    updateArticle( updatedArticle : Article){
        const index = this.listeArticles().findIndex((a) => a.id == updatedArticle.id)

        this.listeArticles()[index].name = updatedArticle.name
        this.listeArticles()[index].description = updatedArticle.description
        this.listeArticles()[index].price = updatedArticle.price
        this.listeArticles()[index].stock = updatedArticle.stock
         
    }

    deleteArticle(id : number){
        this.listeArticles.update((list) => list.filter((a) => a.id !== id) )
    }
}
