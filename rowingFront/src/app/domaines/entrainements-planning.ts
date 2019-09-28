import {Entrainements} from './entrainements';
import {CalendarEvent} from 'calendar-utils';

export class EntrainementsPlanning implements CalendarEvent {
  start: Date;
  end: Date;
  id: number;
  training: Entrainements;
  title: string;

  constructor(id?: number, start?: Date, end?: Date, training?: Entrainements, title?: string) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.title = title;
    this.training = training;
  }

}
