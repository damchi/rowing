import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachComponent} from './pages/coach/coach.component';
import {EntrainementsComponent} from './pages/entrainements/entrainements.component';
import {PlanningComponent} from './pages/planning/planning.component';


const routes: Routes = [
  {
    path: 'coach',
    component: CoachComponent,
    children: [
      {
        path: 'entrainement',
        component: EntrainementsComponent,
      },
      {
        path: 'planning',
        component: PlanningComponent,
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
