import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachPlanningComponent} from './coach-planning.component';


const routes: Routes = [
  { path: '',
    component: CoachPlanningComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachPlanningRoutingModule { }
