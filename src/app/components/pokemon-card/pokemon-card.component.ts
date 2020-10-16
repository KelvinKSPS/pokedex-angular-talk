import { Component, Input, OnInit } from '@angular/core';
import { PokemonListResult } from 'src/app/interfaces/pokemon-list.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input('data') pokemon: Pokemon;
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
