import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "../models/movie";
import {delay} from 'rxjs/operators';

@Injectable()
export class MovieService {

  constructor() {
  }

  public search(): Observable<Movie[]> {
    return of([
      new Movie({id: 1, name: 'Test Movie'}),
      new Movie({id: 2, name: 'Another Movie'}),
      new Movie({id: 3, name: 'Movie'}),
      new Movie({id: 4, name: 'Tester'})
    ]).pipe(delay(5000));
  }
}
