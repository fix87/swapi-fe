import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

@NgModule({
  declarations: [FilmsComponent],
  imports: [CommonModule, FilmsRoutingModule, MainLoaderModule],
})
export class FilmsModule {}
