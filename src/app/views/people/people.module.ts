import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

import { PeopleComponent } from './people.component';

@NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule, PeopleRoutingModule, MainLoaderModule],
})
export class PeopleModule {}
