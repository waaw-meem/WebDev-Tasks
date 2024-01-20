import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { UserComponent } from './String Interpolation/user/user.component';

import { WeatherService } from './String Interpolation/user/weather.service';
import { MovieFilterComponent } from './String Interpolation/movie-filter/movie-filter.component';
import { ImageGalleryComponent } from './Property-Binding/image-gallery/image-gallery.component';
import { PropertyCatalogueComponent } from './Property-Binding/property-catalogue/property-catalogue.component';
import { ProductDetailComponent } from './Property-Binding/property-catalogue/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MovieFilterComponent,
    ImageGalleryComponent,
    PropertyCatalogueComponent,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [WeatherService,MovieFilterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
