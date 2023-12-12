// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FilmPreviewComponent } from './components/film-preview/film-preview.component';
import { PeoplePreviewComponent } from './components/people-preview/people-preview.component';
import { PlanetPreviewComponent } from './components/planet-preview/planet-preview.component';
import { SpeciePreviewComponent } from './components/specie-preview/specie-preview.component';
import { StarshipPreviewComponent } from './components/starship-preview/starship-preview.component';
import { VehiclePreviewComponent } from './components/vehicle-preview/vehicle-preview.component';

@NgModule({
  declarations: [
    FilmPreviewComponent,
    PeoplePreviewComponent,
    PlanetPreviewComponent,
    SpeciePreviewComponent,
    StarshipPreviewComponent,
    VehiclePreviewComponent,
  ],
  imports: [CommonModule],
  exports: [
    FilmPreviewComponent,
    PeoplePreviewComponent,
    PlanetPreviewComponent,
    SpeciePreviewComponent,
    StarshipPreviewComponent,
    VehiclePreviewComponent,
  ],
})
export class EntitiesPreviewModule {}
