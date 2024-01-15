import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
  providers: [MovieDataService]
})
export class MovieFilterComponent implements OnInit {

  movieData: any;  

  constructor(private displayAll: MovieDataService) {}

  ngOnInit(): void {
    this.getData();
  }



  getData() {
    this.displayAll.getAllMovies().subscribe(
      (data) => {
        // this.movieObject = data
        this.movieData = data.results;

        // console.log(this.movieObject)
        console.log(this.movieData);
      },
    );
  }
}
