import {Component, OnInit} from '@angular/core';
import {TheaterService} from '../../services/theater.service';
import {Observable} from 'rxjs';
import {Theater} from '../../models/theater';
import {MatDialog} from '@angular/material/dialog';
import {AddEditTheaterDialogComponent, DialogType} from '../add-edit-theater-dialog/add-edit-theater-dialog.component';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.scss']
})
export class TheatersComponent implements OnInit {
  theaters$: Observable<Theater[]>;
  loading = false;

  constructor(
    private theaterService: TheaterService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getTheaters();
  }

  public add(): void {
    this.dialog.open<AddEditTheaterDialogComponent>(AddEditTheaterDialogComponent, {disableClose: true})
      .afterClosed().subscribe(() => {
      this.getTheaters();
    });
  }

  public edit(theater: Theater): void {
    this.dialog.open<AddEditTheaterDialogComponent>(AddEditTheaterDialogComponent, {
      disableClose: true,
      data: {
        theater, dialogType: DialogType.Edit
      }
    }).afterClosed().subscribe(() => {
      this.getTheaters();
    });
  }

  public delete(theaterId: number): void {
    console.log(`Delete theater: ${theaterId}.`);
  }

  private getTheaters(): void {
    this.loading = true;
    this.theaters$ = this.theaterService.getTheaters()
      .pipe(tap(() => this.loading = false));
  }
}
