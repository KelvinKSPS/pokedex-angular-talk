import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { HeaderService } from 'src/app/services/header.service';
import { ColorService } from 'src/app/services/color.service';

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
    private colorService: ColorService,
    private elementRef: ElementRef
  ) {}
    id: string;
  pokemon: Pokemon;
  backgroundColor: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.apiService.getPokemonDetails(this.id).subscribe((result) => {
        this.pokemon = result;
        console.log(result);
        this.setBackgroundColor([...this.pokemon.type]);
        this.headerService.updateTitle('Pokémon');
      });
    });
  }

  ngOnDestroy(): void {
    this.removeBackgroundColor();
  }

  goback(event: any): void {
    event.preventDefault();
    this.location.back();
  }

  private setBackgroundColor(types: any[]): void {
    this.backgroundColor = this.colorService.getColors(types[0], types[1]);
    this.elementRef.nativeElement.ownerDocument.body.style.background = this.backgroundColor;
  }

  private removeBackgroundColor(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.background = '#1E3263';
  }

}
