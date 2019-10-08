import {EventColor} from 'calendar-utils';

export class Color implements EventColor {
  id: number;
  primary: string;
  secondary: string;

  constructor(id?: number, primary?: string, secondary?: string) {
    this.id = id;
    this.primary = primary;
    this.secondary = secondary;
  }
}
