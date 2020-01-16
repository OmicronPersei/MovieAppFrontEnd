import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StarsComponent } from './components/stars/stars.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    StarsComponent
  ],
  exports: [
    StarsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class StarsModule {
}
