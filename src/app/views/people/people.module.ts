// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PeopleRoutingModule } from './people-routing.module';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

// Components
import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

@NgModule({
  declarations: [PeopleComponent, PeopleListComponent, PeopleDetailComponent],
  imports: [CommonModule, PeopleRoutingModule, MainLoaderModule],
})
export class PeopleModule {}
