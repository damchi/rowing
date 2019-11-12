import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachComponent } from './coach.component';
import {CoachExerciceComponent} from '../coach-exercice/coach-exercice.component';
import {CoachPlanningComponent} from '../coach-planning/coach-planning.component';

const routes: Routes = [
  { path: '',
    component: CoachComponent,
    children: [
      {
        path: 'entrainement',
        loadChildren: () => import('../coach-entrainements/coach-entrainements.module').then(m => m.CoachEntrainementsModule)
      },
      {
        path: 'exercice',
        loadChildren: () => import('../coach-exercice/coach-exercice.module').then(m => m.CoachExerciceModule)
      },
      {
        path: 'planning',
        loadChildren: () => import('../coach-planning/coach-planning.module').then(m => m.CoachPlanningModule)
      },
      // {
      //   path: 'typeExercice',
      //   loadChildren: () => import('../coach-type-exercice/coach-type-exercice.module').then(m => m.CoachTypeExerciceModule)
      // },
      {path: '**', redirectTo: '/coach/planning'},
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
