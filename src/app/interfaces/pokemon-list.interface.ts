import { Pokemon } from './pokemon.interface';

export interface PokemonList {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonListResult[];
}

export interface PokemonListResult {
    name: string;
    url: string;
    details: Pokemon;
}