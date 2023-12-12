// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PeopleRoutingModule } from './people-routing.module';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';
import { BootstrapModule } from '../../shared/bootstrap';
import { PipesModule } from '../../shared/pipes/pipes.module';

// Components
import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { EntitiesPreviewModule } from '../../shared/entities-preview/entities-preview.module';

@NgModule({
  declarations: [PeopleComponent, PeopleListComponent, PeopleDetailComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MainLoaderModule,
    BootstrapModule,
    PipesModule,
    EntitiesPreviewModule,
  ],
})
export class PeopleModule {}
