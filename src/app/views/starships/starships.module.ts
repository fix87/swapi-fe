import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarhipsComponent } from './starships.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

@NgModule({
  declarations: [StarhipsComponent],
  imports: [CommonModule, StarshipsRoutingModule, MainLoaderModule],
})
export class StarshipsModule {}
