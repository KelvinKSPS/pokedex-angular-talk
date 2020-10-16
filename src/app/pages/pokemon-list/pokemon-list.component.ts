import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonListResult } from 'src/app/interfaces/pokemon-list.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: PokemonListResult[] = [];

  constructor(private apiService: ApiService, private router: Router) {

  }

  ngOnInit() {
    this.apiService.getPokemonList()
      .subscribe(list => {
        this.pokemonList = list.results
        this.pokemonList.forEach((result, index) => {
          this.apiService.getPokemonDetails(result.name)
            .subscribe(result => {
              this.pokemonList[index].details = result;
            })
        })
      })
  }

  // navigateToDetails(name: string) {
  //   this.router.navigate([`/details/${name}`])
  // }

}
