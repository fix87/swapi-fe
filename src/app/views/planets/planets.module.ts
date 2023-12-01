import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

@NgModule({
  declarations: [PlanetsComponent],
  imports: [CommonModule, PlanetsRoutingModule, MainLoaderModule],
})
export class PlanetsModule {}
