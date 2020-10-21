import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList$: Observable<Pokemon[]>;

  constructor(private apiService: ApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.pokemonList$ = this.apiService.getPokemonList();
  }

}
