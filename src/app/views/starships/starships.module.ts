import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

@NgModule({
  declarations: [StarshipsComponent],
  imports: [CommonModule, StarshipsRoutingModule, MainLoaderModule],
})
export class StarshipsModule {}
