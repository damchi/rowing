import {Entrainements} from './entrainements';
import {CalendarEvent} from 'calendar-utils';
import {CalendarEventAction} from 'angular-calendar';



export  interface EntrainementsPlanning extends CalendarEvent {

  // start: Date;
  id?: number;
  // end: Date;
  // id: number;
  training?: Entrainements;
  // title: string;
  // draggable: boolean;
  action?: CalendarEventAction[];

}

// export class EntrainementsPlanning implements EntrainementsPlanningInterface {
//
//   start: Date;
//   end: Date;
//   id: number;
//   training: Entrainements;
//   title: string;
//   draggable: boolean;
//   action: CalendarEventAction[];
//
//   constructor(id?: number, start?: Date, end?: Date, training?: Entrainements, title?: string,
//               draggable?: boolean, action?: CalendarEventAction[]) {
//     this.id = id;
//     this.start = start;
//     this.end = end;
//     this.title = title;
//     this.training = training;
//     this.draggable = draggable;
//     this.action = action;
//   }
//
// }
