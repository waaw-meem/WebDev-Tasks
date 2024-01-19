import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
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

  users: any[] = []; // Initialize the users array

  @ViewChild('firstName') firstName!: ElementRef;
  @ViewChild('lastName') lastName!: ElementRef;
  @ViewChild('userAge') userAge!: ElementRef;

  addUser() {
    this.users.push({
      firstNameValue: this.firstName?.nativeElement.value,
      lastNameValue: this.lastName?.nativeElement.value,
      userAgeValue: this.userAge?.nativeElement.value
    });

    console.log(this.users);
  }


  getUserName(userAttr:string){
    this.userInput = userAttr
  }

  constructor(private weatherService: WeatherService) { 
    this.users = []
  }

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
