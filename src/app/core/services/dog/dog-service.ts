import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { DogReponse } from '../../../features/demonstrations/demo18-httpClient/dog.model';

@Service()
export class DogService {
     // http client permet d'effectuer des requettes http
    httpClient = inject(HttpClient)

    APIURL = 'https://dog.ceo/api/breeds'

    listPictures = signal<string[]>([])


    // methode qui renvoie un observable ( l'observable contient l'information)
    getDog(): Observable<DogReponse>{
        return this.httpClient.get<DogReponse>(`${this.APIURL}/image/random`)
    }

    addDog(data : string){
        // POST
        return this.httpClient.post<DogReponse>('url',data)
    }

    updateDog(updateData : string,id: number){
        // PUT
        return this.httpClient.put<DogReponse>(`url/${id}`,updateData)
    }

    deleteDog(id : number){
        // DELETE
        return this.httpClient.delete<boolean>(`url/${id}`)

    }
}
