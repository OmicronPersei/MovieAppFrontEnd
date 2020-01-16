import {Component, OnInit} from '@angular/core';
import {TheaterService} from '../../services/theater.service';
import {Observable} from 'rxjs';
import {Theater} from '../../models/theater';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.scss']
})
export class TheatersComponent implements OnInit {
  theaters$: Observable<Theater[]>;

  constructor(
    private theaterService: TheaterService
  ) {
  }

  ngOnInit() {
    this.getTheaters();
  }

  public add(): void {
    console.log('Add theater.');
  }

  public edit(theaterId: number): void {
    console.log(`Edit theater: ${theaterId}.`);
  }

  public delete(theaterId: number): void {
    console.log(`Delete theater: ${theaterId}.`);
  }

  private getTheaters(): void {
    this.theaters$ = this.theaterService.getTheaters();
  }
}
