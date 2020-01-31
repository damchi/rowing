import {Entrainements} from './entrainements';
import {CalendarEvent} from 'calendar-utils';



export interface EntrainementsPlanning extends CalendarEvent {

  id?: number;
  training?: Entrainements;
  dayStart?: Date;
  dayEnd?: Date;

}
