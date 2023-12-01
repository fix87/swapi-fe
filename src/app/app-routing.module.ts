import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./views/people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./views/planets/planets.module').then((m) => m.PlanetsModule),
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./views/films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'species',
    loadChildren: () =>
      import('./views/species/species.module').then((m) => m.SpeciesModule),
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./views/vehicles/vehicles.module').then((m) => m.VehiclesModule),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./views/starships/starships.module').then(
        (m) => m.StarshipsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
