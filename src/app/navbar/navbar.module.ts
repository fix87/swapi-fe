import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BootstrapModule } from '../shared/bootstrap';

import { NavbarComponent } from './navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';

@NgModule({
  declarations: [NavbarComponent, NavbarItemComponent],
  imports: [CommonModule, BootstrapModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
