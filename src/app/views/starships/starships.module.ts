// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { StarshipsRoutingModule } from './starships-routing.module';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

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
  ],
})
export class StarshipsModule {}
