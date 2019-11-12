import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachTypeExerciceComponent } from './coach-type-exercice.component';

const routes: Routes = [{ path: '', component: CoachTypeExerciceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachTypeExerciceRoutingModule { }
