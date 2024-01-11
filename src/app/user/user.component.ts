import { Component,OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInput: string = ''; 
  weatherData: any;
movieData: any;

  getUserName(userAttr:string){
    this.userInput = userAttr
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData('Karachi'); // Fetch weather for Karachi by default
  }

  getWeatherData(city: string): void {
    this.weatherService.getWeather(city)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData)
      });
  }



}
