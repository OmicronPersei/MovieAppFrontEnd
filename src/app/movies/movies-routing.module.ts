import {RouterModule, Routes} from '@angular/router';
import {MovieSearchComponent} from './components/movie-search/movie-search.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'search',
    component: MovieSearchComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
