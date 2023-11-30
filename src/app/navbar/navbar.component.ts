import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public isMenuCollapsed = true;
  public navbarItems: string[] = [];

  public constructor(private dataService: DataService) {
    this.navbarItems = [...Object.keys(this.dataService.rootEntrypoints)];
  }
}
