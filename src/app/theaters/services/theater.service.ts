import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Theater} from '../models/theater';
import {delay} from 'rxjs/operators';

@Injectable()
export class TheaterService {

  constructor() { }

  public getTheaters(): Observable<Theater[]> {
    return of([
      new Theater({id: 1, name: 'Test', latitude: 12, longitude: 13}),
      new Theater({id: 2, name: 'Another Test', latitude: 42, longitude: 46}),
      new Theater({id: 3, name: 'Just Testing', latitude: 62, longitude: 32}),
      new Theater({id: 4, name: 'Tester', latitude: 2, longitude: 23}),
    ]).pipe(delay(5000));
  }

  public addTheater(theater: Theater): Observable<void> {
    return of(null).pipe(delay(5000));
  }

  public updateTheater(theater: Theater): Observable<void> {
    return of(null).pipe(delay(5000));
  }
}
