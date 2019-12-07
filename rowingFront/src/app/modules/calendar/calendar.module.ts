import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {CalendarComponent} from './calendar.component';
import {CalendarHeaderComponent} from '../../components/calendar-header/calendar-header.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';



@NgModule({
  declarations: [CalendarComponent, CalendarHeaderComponent],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  exports: [CalendarComponent]
})
export class CalendarTModule { }
