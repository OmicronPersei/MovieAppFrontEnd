import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TheatersComponent} from './components/theaters/theaters.component';

const routes: Routes = [
  {
    path: '',
    component: TheatersComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheatersRoutingModule { }
