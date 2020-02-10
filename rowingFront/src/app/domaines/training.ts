import {TypeExercice} from './type-exercice';
import {Categories} from './categories';
import {Roles} from './roles';
import {Season} from './season';
import {CalendarEvent, EventColor} from 'calendar-utils';
import {Color} from './color';
import {Exercice} from './exercice';

export class Training  {
  id: number;
  title: string;
  category: Categories[];
  entrainement: string;
  strokesStart: number;
  comments: string;
  cadence: string;
  role: Roles;
  season: Season;
  exercices: Exercice[];
  // exerciceDrill: TypeExercice[];
  // exerciceMuscu: TypeExercice[];
  // exerciceCore: TypeExercice[];
  rest: string;
  warmUp: string;
  color: Color;
  draggable: boolean;


// constructor(id?: number, title?: string, category?: Categories[], entrainement?: string,
//             comments?: string, cadence?: string, role?: Roles, strokesStart?: number,
//             season?: Season, exerciceDrill?: TypeExercice[], exerciceMuscu?: TypeExercice[], exerciceCore?: TypeExercice[],
//             rest?: string, warmUp?: string,
//             color?: Color) {
  constructor(id?: number, title?: string, category?: Categories[], entrainement?: string,
              comments?: string, cadence?: string, role?: Roles, strokesStart?: number,
              season?: Season, exercices?: Exercice[], rest?: string, warmUp?: string, color?: Color, draggable?:boolean) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.entrainement = entrainement;
    this.strokesStart = strokesStart;
    this.comments = comments;
    this.cadence = cadence;
    this.season = season;
    this.role = role;
    this.exercices = exercices;
    this.draggable = draggable;
    // this.exerciceMuscu = exerciceMuscu;
    // this.exerciceDrill = exerciceDrill;
    // this.exerciceCore = exerciceCore;
    this.rest = rest;
    this.warmUp = warmUp;
    this.color = color;
  }


}
