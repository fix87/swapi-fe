// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { StarshipsComponent } from './starships.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StarshipsComponent,
    children: [
      {
        path: '',
        component: StarshipsListComponent,
      },
      {
        path: ':id',
        component: StarshipDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipsRoutingModule {}
