// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PlanetsComponent } from './planets.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    children: [
      {
        path: '',
        component: PlanetsListComponent,
      },
      {
        path: ':id',
        component: PlanetDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
