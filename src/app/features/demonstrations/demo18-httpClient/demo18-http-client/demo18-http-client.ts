import { Component, inject, signal } from '@angular/core';
import { Movie } from '../movie.model';
import { DogService } from '../../../../core/services/dog/dog-service';
import { MovieService } from '../../../../core/services/movies/movie-service';
import { DogReponse } from '../dog.model';

@Component({
  selector: 'app-demo18-http-client',
  imports: [],
  templateUrl: './demo18-http-client.html',
  styleUrl: './demo18-http-client.css',
})
export class Demo18HttpClient {

   dogService = inject(DogService)

  imageUrl = signal<string>('')

  getDog(){
    this.dogService.getDog().subscribe({
      next : (res : DogReponse) => {
        console.log(res);
        this.imageUrl.set(res.message)
        
      },
      error : (err) => {
        console.log(err);
        
      },
      complete : () => {
        console.log('opération terminée');
        
      }
    })
    
  }

  // -----------------------------------

  movieService = inject(MovieService)

  movies = signal<Movie[]>([])

  getMovies(){
    this.movieService.getMovie().subscribe({
      next : (res) => {
        this.movies.set(res)
      }
    })
    
  }
}
