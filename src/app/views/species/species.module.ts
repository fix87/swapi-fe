import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

@NgModule({
  declarations: [SpeciesComponent],
  imports: [CommonModule, SpeciesRoutingModule, MainLoaderModule],
})
export class SpeciesModule {}
