export class Entrainements {
  id: number;
  name: string;
  category: string;
  distance: number;
  start: number;
  comments: string;
  cadence: string;
  membre: number;
  season: string;

  constructor(id?: number, name?: string, category?: string, distance?: number, comments?: string, cadence?: string, membre?: number, start?: number, season?: string) {

    this.id = id;
    this.name = name;
    this.category = category;
    this.distance = distance;
    this.comments = comments;
    this.cadence = cadence;
    this.membre = membre;
    this.start = start;
    this.season = season;

  }


}
