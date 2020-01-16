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

@NgModule({
  declarations: [
    TheatersComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TheatersRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [],
  providers: [
    TheaterService
  ]
})
export class TheatersModule {
}
