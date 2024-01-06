import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent implements OnInit {
  movieService = inject(MovieService);
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  nowPlayingMovies: any[] = [];
  upcomingMovies: any[] = [];

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovies = result.results;
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      console.log(result);
      this.topRatedMovies = result.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      console.log(result);
      this.nowPlayingMovies = result.results;
    });
    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      console.log(result);
      this.upcomingMovies = result.results;
    });
  }
}
