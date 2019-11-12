import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share/share.module';
import {CoachPlanningComponent} from './coach-planning.component';
import {CoachPlanningRoutingModule} from './coach-planning-routing.module';
import {CalendarTModule} from '../calendar/calendar.module';



@NgModule({
  declarations: [CoachPlanningComponent],
  imports: [
    CommonModule,
    CoachPlanningRoutingModule,
    ShareModule,
    CalendarTModule
  ],
})
export class CoachPlanningModule { }
