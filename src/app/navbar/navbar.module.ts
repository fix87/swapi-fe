import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BootstrapModule } from '../shared/bootstrap';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, BootstrapModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
