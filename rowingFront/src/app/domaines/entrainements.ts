export class Entrainements {
  id: number;
  name: string;
  category: string;
  distance: number;
  comments: string;
  membre: number;
  start: number;
  season: boolean;

  constructor(id?: number, name?: string, category?: string, distance?: number, comments?: string, membre?: number, start?: number, season?: boolean) {

    this.id = id;
    this.name = name;
    this.category = category;
    this.distance = distance;
    this.comments = comments;
    this.membre = membre;
    this.start = start;
    this.season = season;

  }


}
