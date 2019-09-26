import {Entrainements} from './entrainements';
import {Categories} from './categories';
import {Roles} from './roles';
import {Season} from './season';
import {TypeExercice} from './type-exercice';

export class EntrainementsPlanning extends Entrainements{
  start: Date;
  end: Date;
  id: number;

  constructor(id?: number, start?: Date, end?: Date) {
    super();
    this.id = id;
    this.start = start;
    this.end = end;
  }

}
