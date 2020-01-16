import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Theater} from '../models/theater';

@Injectable()
export class TheaterService {

  constructor() { }

  public getTheaters(): Observable<Theater[]> {
    return of([
      new Theater({id: 1, name: 'Test', latitude: 12, longitude: 13}),
      new Theater({id: 2, name: 'Another Test', latitude: 42, longitude: 46}),
      new Theater({id: 3, name: 'Just Testing', latitude: 62, longitude: 32}),
      new Theater({id: 4, name: 'Tester', latitude: 2, longitude: 23}),
    ])
  }
}
