export class Entrainements {
  id: number;
  name: string;
  category: string;
  distance: number;
  start: number;
  comments: string;
  cadence: string;
  role: number;
  season: string;

  constructor(id?: number, name?: string, category?: string, distance?: number, comments?: string, cadence?: string, role?: number, start?: number, season?: string) {

    this.id = id;
    this.name = name;
    this.category = category;
    this.distance = distance;
    this.start = start;
    this.comments = comments;
    this.cadence = cadence;
    this.season = season;
    this.role = role;

  }


}
