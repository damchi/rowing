import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachComponent} from './pages/coach/coach.component';
import {CoachPlanningComponent} from './modules/coach-planning/coach-planning.component';
import {CoachExerciceComponent} from './modules/coach-exercice/coach-exercice.component';


const routes: Routes = [
  { path: 'coach',
    loadChildren: () => import('./modules/coach/coach.module').then(m => m.CoachModule),
  },
  { path: 'coach-categorie',
    loadChildren: () => import('./modules/coach-type-exercice/coach-type-exercice.module').then(m => m.CoachTypeExerciceModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
