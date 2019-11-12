import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachEntrainementsComponent } from './coach-entrainements.component';

const routes: Routes = [
  { path: '',
    component: CoachEntrainementsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachEntrainementsRoutingModule { }
