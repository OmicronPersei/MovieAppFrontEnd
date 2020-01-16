import {RouterModule, Routes} from '@angular/router';
import {MovieSearchComponent} from './components/movie-search/movie-search.component';
import {NgModule} from '@angular/core';
import {MoviesComponent} from './components/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'search',
    component: MovieSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
