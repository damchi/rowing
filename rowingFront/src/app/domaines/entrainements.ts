import {TypeExercice} from './type-exercice';
import {Categories} from './categories';
import {Roles} from './roles';
import {Season} from './season';

export class Entrainements {
  id: number;
  name: string;
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
  color: string;
  start: Date;
  draggable: boolean;

constructor(id?: number, name?: string, category?: Categories[], distance?: string,
            comments?: string, cadence?: string, role?: Roles, strokesStart?: number,
            season?: Season, exercices?: TypeExercice[], rest?: string, warmUp?: string, color?: string, start?: Date, draggable?: boolean) {

    this.id = id;
    this.name = name;
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
    this.start = start;
    this.draggable = draggable;

  }


}
