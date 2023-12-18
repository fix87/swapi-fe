// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { BootstrapModule } from '../../shared/bootstrap';
import { EntitiesPreviewModule } from '../../shared/entities-preview/entities-preview.module';

// Components
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';

@NgModule({
  declarations: [
    VehiclesComponent,
    VehiclesListComponent,
    VehicleDetailComponent,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    MainLoaderModule,
    BootstrapModule,
    EntitiesPreviewModule,
  ],
})
export class VehiclesModule {}
