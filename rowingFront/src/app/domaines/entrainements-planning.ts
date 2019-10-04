import {Entrainements} from './entrainements';
import {CalendarEvent} from 'calendar-utils';
import {CalendarEventAction} from 'angular-calendar';

export class EntrainementsPlanning implements CalendarEvent {
  start: Date;
  end: Date;
  id: number;
  training: Entrainements;
  title: string;
  draggable: boolean;
  action: CalendarEventAction[]

  constructor(id?: number, start?: Date, end?: Date, training?: Entrainements, title?: string,
              draggable?: boolean, action?: CalendarEventAction[]) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.title = title;
    this.training = training;
    this.draggable = draggable;
    this.action = action;
  }

}
