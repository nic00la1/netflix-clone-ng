import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tmdbConfig } from '../constants/config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  httpService = inject(HttpClient);

  getPopularMovies() {
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/popular', {
      headers,
    });
  }

  getHeaders() {
    const headers = new HttpHeaders();
    headers.append('accept', 'application/json');
    headers.append('Authorization', 'Bearer' + tmdbConfig.accessToken);
    return headers;
  }
}
