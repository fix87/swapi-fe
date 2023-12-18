// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { StarshipsRoutingModule } from './starships-routing.module';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';
import { EntitiesPreviewModule } from '../../shared/entities-preview/entities-preview.module';

// Components
import { StarshipsComponent } from './starships.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { BootstrapModule } from '../../shared/bootstrap';

@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipDetailComponent,
    StarshipsListComponent,
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    MainLoaderModule,
    BootstrapModule,
    EntitiesPreviewModule,
  ],
})
export class StarshipsModule {}
