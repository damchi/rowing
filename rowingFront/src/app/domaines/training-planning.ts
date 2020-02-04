import {Training} from './training';
import {CalendarEvent} from 'calendar-utils';



export interface TrainingPlanning extends CalendarEvent {

  id?: number;
  training?: Training;
  dayStart?: Date;
}
