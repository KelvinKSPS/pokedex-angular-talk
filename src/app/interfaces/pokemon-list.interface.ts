export interface PokemonListResult {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonList[];
}

export interface PokemonList {
    name: string;
    url: string;
}
