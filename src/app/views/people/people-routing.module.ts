// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      {
        path: '',
        component: PeopleListComponent,
      },
      {
        path: ':id',
        component: PeopleDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
