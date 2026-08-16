import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../../features/demonstrations/demo18-httpClient/movie.model';

@Service()
export class MovieService {
    
    httpClient = inject(HttpClient)
    
    getMovie() : Observable<Movie[]>{
        return this.httpClient.get<Movie[]>('https://api.sampleapis.com/movies/animation')
    }
}
