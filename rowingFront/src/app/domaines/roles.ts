import {Training} from './training';

export class Roles {
  id: number;
  name: string;
  entrainements: Training[];

  constructor(id?: number, name?: string, entrainements?: Training[] ) {
    this.id = id;
    this.name = name;
    this.entrainements = entrainements;
  }
}
