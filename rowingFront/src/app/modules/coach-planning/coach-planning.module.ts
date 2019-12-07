import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoachPlanningComponent} from './coach-planning.component';
import {CoachPlanningRoutingModule} from './coach-planning-routing.module';
import {CalendarTModule} from '../calendar/calendar.module';
import {
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [CoachPlanningComponent],
  imports: [
    CommonModule,
    CoachPlanningRoutingModule,
    CalendarTModule,
    ShareModule
  ],
})
export class CoachPlanningModule { }
