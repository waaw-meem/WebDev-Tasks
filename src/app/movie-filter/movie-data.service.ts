import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  apiKey = 'c26621a7b5171ebc92b8247253449198';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }


  userSearch():Observable<any>{
    const searchAPIURL = 'https://api.themoviedb.org/3/search/movie?api_key=c26621a7b5171ebc92b8247253449198&language=en-US&query=all&page=1&include_adult=false'
    return this.http.get(searchAPIURL)
  }
}
