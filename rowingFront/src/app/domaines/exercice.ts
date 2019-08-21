export class Exercice {
  id: number;
  name: string;
  typeExercices: number;
  description: string;

  constructor(id?: number, typeExercices?: number, name?: string, description?: string ) {
      this.id = id;
      this.name = name;
      this.typeExercices = typeExercices;
      this.description = description;
  }
}
