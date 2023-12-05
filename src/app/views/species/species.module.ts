// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SpeciesRoutingModule } from './species-routing.module';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';
import { BootstrapModule } from '../../shared/bootstrap';

// Components
import { SpeciesComponent } from './species.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpecieDetailComponent } from './components/specie-detail/specie-detail.component';

@NgModule({
  declarations: [SpeciesComponent, SpeciesListComponent, SpecieDetailComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    MainLoaderModule,
    BootstrapModule,
  ],
})
export class SpeciesModule {}
