import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "../models/movie";

@Injectable()
export class MovieService {

  constructor() { }

  public search(): Observable<Movie[]> {
    return of([ new Movie({id: 1234, name: 'Test Movie'})]);
  }
}
