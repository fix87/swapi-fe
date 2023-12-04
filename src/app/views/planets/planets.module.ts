import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

@NgModule({
  declarations: [PlanetsComponent, PlanetDetailComponent, PlanetsListComponent],
  imports: [CommonModule, PlanetsRoutingModule, MainLoaderModule],
})
export class PlanetsModule {}
