import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';

@NgModule({
  declarations: [StarshipsComponent, StarshipDetailComponent, StarshipsListComponent],
  imports: [CommonModule, StarshipsRoutingModule, MainLoaderModule],
})
export class StarshipsModule {}
