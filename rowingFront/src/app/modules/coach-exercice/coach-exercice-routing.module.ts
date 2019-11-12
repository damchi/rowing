import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CoachExerciceComponent} from './coach-exercice.component';

const routes: Routes = [{ path: '', component: CoachExerciceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachExerciceRoutingModule { }
