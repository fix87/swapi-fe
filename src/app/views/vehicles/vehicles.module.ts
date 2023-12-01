import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

@NgModule({
  declarations: [VehiclesComponent],
  imports: [CommonModule, VehiclesRoutingModule, MainLoaderModule],
})
export class VehiclesModule {}
