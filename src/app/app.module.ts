import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonCardComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
