import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachComponent} from './pages/coach/coach.component';
import {CoachEntrainementsComponent} from './pages/coach-entrainements/coach-entrainements.component';
import {CoachPlanningComponent} from './pages/coach-planning/coach-planning.component';


const routes: Routes = [
  {
    path: 'coach',
    component: CoachComponent,
    children: [
      {
        path: 'entrainement',
        component: CoachEntrainementsComponent,
      },
      {
        path: 'planning',
        component: CoachPlanningComponent,
      },
      {path: '**', redirectTo: '/coach/planning'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
