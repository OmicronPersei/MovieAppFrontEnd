import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "../models/movie";
import {delay} from 'rxjs/operators';

@Injectable()
export class MovieService {

  constructor() {
  }

  public getMovies(): Observable<Movie[]> {
    return of([
      new Movie({id: 1, name: 'Test Movie', rating: 4}),
      new Movie({id: 2, name: 'Another Movie', rating: 2}),
      new Movie({id: 3, name: 'Movie', rating: 3.5}),
      new Movie({id: 4, name: 'Tester', rating: 5}),
      new Movie({id: 2, name: 'Another Movie', rating: 2}),
      new Movie({id: 3, name: 'Movie', rating: 3.5}),
      new Movie({id: 4, name: 'Tester', rating: 5}),
      new Movie({id: 2, name: 'Another Movie', rating: 2}),
      new Movie({id: 3, name: 'Movie', rating: 3.5}),
      new Movie({id: 4, name: 'Tester', rating: 5})
    ]).pipe(delay(5000));
  }

  public search(): Observable<Movie[]> {
    return of([
      new Movie({id: 1, name: 'Test Movie', rating: 4}),
      new Movie({id: 2, name: 'Another Movie', rating: 4}),
      new Movie({id: 3, name: 'Movie', rating: 4}),
      new Movie({id: 4, name: 'Tester', rating: 4})
    ]).pipe(delay(5000));
  }
}
