import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PokemonList } from '../interfaces/pokemon-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${this.apiUrl}/pokemon?limit=251`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }
}
