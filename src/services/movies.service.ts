import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private movies = [
    { title: 'Movie 1', director: 'Director 1' },
    { title: 'Movie 2', director: 'Director 2' },
    // Add more movie data here
  ];

  getMovies() {
    return this.movies;
  }
}


