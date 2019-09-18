import {TypeExercice} from './type-exercice';
import {Categories} from './categories';
import {Roles} from './roles';
import {Season} from './season';

export class Entrainements {
  id: number;
  name: string;
  category: Categories[];
  distance: number;
  start: number;
  comments: string;
  cadence: string;
  role: Roles;
  season: Season;
  exercices: TypeExercice[];
  rest: string;
  warmUp: string;

constructor(id?: number, name?: string, category?: Categories[], distance?: number,
            comments?: string, cadence?: string, role?: Roles, start?: number,
            season?: Season, exercices?: TypeExercice[], rest?: string, warmUp?: string) {

    this.id = id;
    this.name = name;
    this.category = category;
    this.distance = distance;
    this.start = start;
    this.comments = comments;
    this.cadence = cadence;
    this.season = season;
    this.role = role;
    this.exercices = exercices;
    this.rest = rest;
    this.warmUp = warmUp;

  }


}
