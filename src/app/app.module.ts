import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { WeatherService } from './user/weather.service';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieDetailComponent } from './movie-filter/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MovieFilterComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService,MovieFilterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
