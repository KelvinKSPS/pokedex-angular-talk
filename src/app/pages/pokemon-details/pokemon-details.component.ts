import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private headerService: HeaderService,
    @Inject(DOCUMENT) private document: HTMLDocument,
  ) {}
  pokemon: Pokemon;

  ngOnInit(): void {
    const name = this.route.snapshot.params.name;
    this.apiService.getPokemonDetails(name).subscribe((result) => {
      this.pokemon = result;
      this.document.body.classList.add(`card--${this.pokemon.types[0].type.name}`);
      this.headerService.updateTitle(this.pokemon.name);
    });
  }

  goback(event: any): void {
    console.log(event);
    event.preventDefault();
    this.location.back();
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(`card--${this.pokemon.types[0].type.name}`);
  }
}
