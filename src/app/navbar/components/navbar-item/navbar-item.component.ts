import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
})
export class NavbarItemComponent {
  @Input({ required: true }) public navbarItem: string = '';

  public getHref(navbarItem: string): string {
    return `/${navbarItem}`;
  }

  public getFirstLetterCapital(navbarItem: string): string {
    return navbarItem.charAt(0).toUpperCase() + navbarItem.slice(1);
  }
}
