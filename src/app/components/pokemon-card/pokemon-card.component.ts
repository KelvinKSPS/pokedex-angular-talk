import { DOCUMENT } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon: Pokemon;
  @Input() size: 'small' | 'big';
  tabActive = 1;

  constructor(private router: Router) {}

  goToPokemonDetails(num: string): void {
    this.router.navigateByUrl(`/details/${num}`);
  }

}
