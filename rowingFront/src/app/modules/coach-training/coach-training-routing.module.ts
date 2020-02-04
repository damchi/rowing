import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachTrainingComponent } from './coach-training.component';

const routes: Routes = [
  { path: '',
    component: CoachTrainingComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachTrainingRoutingModule { }
