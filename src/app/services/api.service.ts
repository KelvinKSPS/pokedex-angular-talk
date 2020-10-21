import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { delay, map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<any>(environment.apiUrl).pipe(
      map((data: any) => data.pokemon),
      delay(1500)
    );
  }

  getPokemonDetails(pokemonNumber: number): Observable<Pokemon> {
    return this.http.get<any>(environment.apiUrl).pipe(
      map((data: any) => data.pokemon),
      map((pokemons: Pokemon[]) => {
        if (pokemonNumber > 0 && pokemonNumber < 152) {
          return pokemons.find(pokemon => Number(pokemon.num) === pokemonNumber);
        }
        return this.missingNo();
      })
    );
  }

  getPokemonListQueryByByName(pokemonName: string): Observable<Pokemon[]> {
    return this.http.get<any>(environment.apiUrl).pipe(
      map((data: any) => data.pokemon),
      map((pokemons: Pokemon[]) => {
        if (!pokemonName) {
          return pokemons;
        }
        return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase().trim()));
      })
    );
  }

  private missingNo(): Pokemon {
    return {
      "id": "000",
      "num": "000",
      "name": "MissingNo.",
      "img": "https://www.serebii.net/pokearth/sprites/rb/000.png",
      "type": [
        "Normal", "Flying"
      ],
      "height": "0.41 m",
      "weight": "4.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [

      ]
    } as Pokemon;
  }

  // getPokemonList(): Observable<Pokemon[]> {
  //   return this.http.get<PokemonListResult>(`${this.apiUrl}/pokemon?limit=251`).pipe(
  //     mergeMap((data: PokemonListResult) => {
  //       const observables = data.results.map(pokemon => this.getPokemonDetails(pokemon.name));
  //       return forkJoin(observables);
  //     })
  //   );
  // }

  // getPokemonDetails(name: string): Observable<Pokemon> {
  //   return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${name}`);
  // }

  // getPokemonEvolutionChain(name: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/evolution-chain/${name}`);
  // }

  // https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json (other reference)
}
