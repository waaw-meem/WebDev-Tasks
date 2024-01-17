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
  searchData: any;

  @ViewChild('inputSearchValue') inputSearchValue!: ElementRef;

  constructor(private displayAll: MovieDataService) {}
  
  ngAfterViewInit(): void {
    // console.log('inputSearchValue:', this.inputSearchValue);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.displayAll.getAllMovies().subscribe((data) => {
      this.movieData = data.results;
      console.log(this.movieData);
    });
  }

  getMovieName() {
    const inputValue = this.inputSearchValue?.nativeElement.value;
    console.log(inputValue);

    this.displayAll.userSearch().subscribe((data)=>{
    this.searchData = data.results;
    console.log(this.searchData)

    const originalTitles = data.results.map((movie: any) => movie.original_title);

      if(originalTitles.includes(inputValue)){
        alert('Success')
      }else{
        alert('Failed')
      }
    }) 

    }

    // this.displayAll.userSearch().subscribe((dataOne) => {
    // this.searchData = dataOne.results;
    // const cardSorted = this.searchData[0]?.original_title;

    // if (cardSorted === inputValue) {
    //   alert('Working');
    // }

    // console.log(this.searchData);
    // });

    // const foundMovie = this.movieData.find(
    //   (movie: any) => movie.original_title === inputValue
    // );

    // if (foundMovie) {
    //   alert('Working');
    // }
}


