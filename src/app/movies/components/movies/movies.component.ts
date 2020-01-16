import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  Array = Array;
  movies$: Observable<Movie[]>;
  loading = false;

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit() {
    this.getMovies();
  }

  public add(): void {
    console.log(`Add movie.`);
  }

  public edit(movie: Movie): void {
    console.log(`Edit movie: ${movie.id}.`);
  }

  public delete(movieId: number): void {
    console.log(`Delete movie: ${movieId}.`);
  }

  public getStars(rating: number): any[] {
    return Array(Math.floor(rating));
  }

  public showHalfStar(rating: number): boolean {
    return rating - Math.floor(rating) > 0;
  }

  public getEmptyStars(rating: number): any[] {
    return Array(5 - Math.ceil(rating));
  }

  private getMovies(): void {
    this.loading = true;
    this.movies$ = this.movieService.getMovies()
      .pipe(tap(() => this.loading = false));
  }

}
