import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TheatersComponent} from './components/theaters/theaters.component';
import {TheatersRoutingModule} from './theaters-routing.module';
import {TheaterService} from './services/theater.service';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AddEditTheaterDialogComponent} from './components/add-edit-theater-dialog/add-edit-theater-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    TheatersComponent,
    AddEditTheaterDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TheatersRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  entryComponents: [
    AddEditTheaterDialogComponent
  ],
  providers: [
    TheaterService
  ]
})
export class TheatersModule {
}
