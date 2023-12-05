// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PlanetsRoutingModule } from './planets-routing.module';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';
import { BootstrapModule } from '../../shared/bootstrap';

// Components
import { PlanetsComponent } from './planets.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

@NgModule({
  declarations: [PlanetsComponent, PlanetDetailComponent, PlanetsListComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    MainLoaderModule,
    BootstrapModule,
  ],
})
export class PlanetsModule {}
