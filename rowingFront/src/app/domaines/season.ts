import {Entrainements} from './entrainements';

export class Season {
  id: number;
  name: string;
  entrainements: Entrainements[];

  constructor(id?: number, name?: string, entrainements?: Entrainements[] ) {
    this.id = id;
    this.name = name;
    this.entrainements = entrainements;
  }
}
