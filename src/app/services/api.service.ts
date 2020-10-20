import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PokemonListResult } from '../interfaces/pokemon-list.interface';
import { mergeMap } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<PokemonListResult>(`${this.apiUrl}/pokemon?limit=251`).pipe(
      mergeMap((data: PokemonListResult) => {
        const observables = data.results.map(pokemon => this.getPokemonDetails(pokemon.name));
        return forkJoin(observables);
      })
    );
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${name}`);
  }

  // https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json (other reference)
}
