import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colors = {
    Fire: '238, 127, 51',
    Normal: '169, 167, 120',
    Water: '104, 144, 240',
    Grass: '120, 200, 79',
    Ice: '152, 216, 215',
    Poison: '160, 64, 161',
    Ground: '224, 192, 105',
    Flying: '167, 144, 239',
    Bug: '168, 184, 33',
    Rock: '182, 160, 55',
    Ghost: '112, 87, 151',
    Dragon: '114, 78, 249',
    Dark: '111, 88, 72',
    Steel: '184, 184, 208',
    Fairy: '244, 200, 226',
    Psychic: '233, 85, 135',
    Electric: '248, 207, 50',
    Fighting: '192, 50, 40',
  };

  constructor() {}

  getColors(color1: string, color2?: string): string {
    if (!color2) {
      color2 = color1;
    }
    return `linear-gradient(to top right, rgba(${this.colors[color1]}, 1), rgba(${this.colors[color2]}, .6))`;
  }

}
