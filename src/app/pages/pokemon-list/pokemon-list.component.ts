import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { HeaderService } from 'src/app/services/header.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList$: Observable<Pokemon[]>;
  searchForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private headerService: HeaderService,
  ) {}

  ngOnInit(): void {
    this.pokemonList$ = this.apiService.getPokemonList();
    this.headerService.updateTitle('Pokédex');

    this.searchForm = new FormGroup({
      text: new FormControl('')
    });

    this.searchForm.get('text').valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(value => this.pokemonList$ = this.apiService.getPokemonListQueryByByName(value));
  }

}
