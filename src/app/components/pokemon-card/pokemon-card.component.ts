import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { PokemonListResult } from 'src/app/interfaces/pokemon-list.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() size: 'small' | 'big';

  constructor() {
  }

  ngOnInit(): void {}

}
