import {TypeExercice} from './type-exercice';
import {Categories} from './categories';
import {Roles} from './roles';
import {Season} from './season';
import {CalendarEvent, EventColor} from 'calendar-utils';
import {Color} from './color';
// import {CalendarEvent} from 'calendar-utils';

// export class Entrainements implements CalendarEvent {
export class Entrainements  {
  id: number;
  title: string;
  category: Categories[];
  distance: string;
  strokesStart: number;
  comments: string;
  cadence: string;
  role: Roles;
  season: Season;
  exercices: TypeExercice[];
  rest: string;
  warmUp: string;
  color: Color;
  // start: Date;
  // end: Date;
  // draggable: boolean;

constructor(id?: number, title?: string, category?: Categories[], distance?: string,
            comments?: string, cadence?: string, role?: Roles, strokesStart?: number,
            season?: Season, exercices?: TypeExercice[], rest?: string, warmUp?: string,
            color?: Color) {
// constructor(id?: number, title?: string, category?: Categories[], distance?: string,
//             comments?: string, cadence?: string, role?: Roles, strokesStart?: number,
//             season?: Season, exercices?: TypeExercice[], rest?: string, warmUp?: string, color?: string,draggable?: boolean) {

    this.id = id;
    this.title = title;
    this.category = category;
    this.distance = distance;
    this.strokesStart = strokesStart;
    this.comments = comments;
    this.cadence = cadence;
    this.season = season;
    this.role = role;
    this.exercices = exercices;
    this.rest = rest;
    this.warmUp = warmUp;
    this.color = color;
    // this.start = start;
    // this.end = end;
    // this.draggable = draggable;
  }


}
