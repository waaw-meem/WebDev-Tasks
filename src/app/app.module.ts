import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { UserComponent } from './String Interpolation/user/user.component';

import { WeatherService } from './String Interpolation/user/weather.service';
import { MovieFilterComponent } from './String Interpolation/movie-filter/movie-filter.component';
import { ImageGalleryComponent } from './Property-Binding/image-gallery/image-gallery.component';
import { PropertyCatalogueComponent } from './Property-Binding/property-catalogue/property-catalogue.component';
import { ProductDetailComponent } from './Property-Binding/property-catalogue/product-detail/product-detail.component';
import { ChartComponent } from './Property-Binding/chart/chart.component';
import { CounterComponent } from './Event-Binding/counter/counter.component';
import { TodoComponent } from './Event-Binding/todo/todo.component';
import { DragDropComponent } from './Event-Binding/drag-drop/drag-drop.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MovieFilterComponent,
    ImageGalleryComponent,
    PropertyCatalogueComponent,
    ProductDetailComponent,
    ChartComponent,
    CounterComponent,
    TodoComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [WeatherService,MovieFilterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
