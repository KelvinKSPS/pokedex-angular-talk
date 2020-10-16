import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute, private apiService: ApiService) { }
  pokemon: Pokemon; 

  ngOnInit(): void {
    const name = this.route.snapshot.params.name;
    this.apiService.getPokemonDetails(name)
      .subscribe(result => {
        this.pokemon = result;
      })
    
  }

  goback(event: any) {
    console.log(event);
    event.preventDefault();
    this.location.back();
  }

}
