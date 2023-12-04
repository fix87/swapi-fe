// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SpeciesComponent } from './species.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpecieDetailComponent } from './components/specie-detail/specie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SpeciesComponent,
    children: [
      {
        path: '',
        component: SpeciesListComponent,
      },
      {
        path: ':id',
        component: SpecieDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeciesRoutingModule {}
