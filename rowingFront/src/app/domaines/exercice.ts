import {TypeExercice} from './type-exercice';

export class Exercice {
  id: number;
  name: string;
  typeExercices: TypeExercice;
  description: string;

  constructor(id?: number, typeExercices?: TypeExercice, name?: string, description?: string ) {
      this.id = id;
      this.name = name;
      this.typeExercices = typeExercices;
      this.description = description;
  }
}
