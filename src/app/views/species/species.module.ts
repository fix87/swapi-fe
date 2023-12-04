import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpecieDetailComponent } from './components/specie-detail/specie-detail.component';

@NgModule({
  declarations: [SpeciesComponent, SpeciesListComponent, SpecieDetailComponent],
  imports: [CommonModule, SpeciesRoutingModule, MainLoaderModule],
})
export class SpeciesModule {}
