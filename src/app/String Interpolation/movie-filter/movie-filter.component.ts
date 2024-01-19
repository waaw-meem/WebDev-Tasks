// movie-filter.component.ts

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
  providers: [MovieDataService],
})
export class MovieFilterComponent implements OnInit, AfterViewInit {

  movieData: any;
  isVisible = false;
  selectedMovie: any | null = null;
  filteredMovies: any[] = [];

  @ViewChild('inputSearchValue') inputSearchValue!: ElementRef;

  constructor(private displayAll: MovieDataService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.displayAll.getAllMovies().subscribe((data) => {
      this.movieData = data.results;
      console.log("Result", this.movieData)

      const inputValue = this.inputSearchValue?.nativeElement.value.toLowerCase();

      this.filteredMovies = this.movieData.filter(
        (movie: any) =>
          movie.original_title.toLowerCase().includes(inputValue) ||
          movie.overview.toLowerCase().includes(inputValue)
      );

      if (this.filteredMovies.length > 0) {
        console.log('Movies found:', this.filteredMovies);
      } else {
        console.log('No movies found');
      }
    });
  }

  showDetail(movie: any) {
    this.selectedMovie = movie;
    this.isVisible = true;
  }

  closeDetail() {
    this.selectedMovie = null;
    this.isVisible = false;
  }
}
