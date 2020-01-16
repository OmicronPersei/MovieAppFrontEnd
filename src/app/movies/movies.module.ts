import {NgModule} from '@angular/core';
import {MovieSearchComponent} from './components/movie-search/movie-search.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieComponent} from './components/movie/movie.component';
import {MoviesRoutingModule} from './movies-routing.module';
import {MovieService} from './services/movie.service';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MoviesComponent} from './components/movies/movies.component';
import {MatCardModule} from '@angular/material/card';
import {StarsModule} from '../stars/stars.module';

@NgModule({
  declarations: [
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    MoviesComponent
  ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressBarModule,
    MatCardModule,
    StarsModule
  ],
  exports: [
    MovieListComponent
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule {
}
