import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'fe23c32c44a347bab5c52132240901'; // Replace with your WeatherAPI key

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
    return this.http.get(apiUrl);
  }
}
