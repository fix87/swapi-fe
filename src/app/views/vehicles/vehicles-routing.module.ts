// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { VehiclesComponent } from './vehicles.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    children: [
      {
        path: '',
        component: VehiclesListComponent,
      },
      {
        path: ':id',
        component: VehicleDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclesRoutingModule {}
