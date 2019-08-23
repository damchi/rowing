import {TypeExercice} from './type-exercice';
import {Categories} from './categories';
import {Roles} from './roles';

export class Entrainements {
  id: number;
  name: string;
  category: Categories[];
  distance: number;
  start: number;
  comments: string;
  cadence: string;
  role: Roles;
  season: string;
  exercices: TypeExercice[];

constructor(id?: number, name?: string, category?: Categories[], distance?: number, comments?: string, cadence?: string, role?: Roles, start?: number, season?: string, exercices?: TypeExercice[]) {

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

  }


}
