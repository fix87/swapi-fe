// Core
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IPlanet } from '../../../../models';

@Component({
  selector: 'app-planet-preview',
  template: `
    <button
      (click)="goToPlanetDetail(planet.url)"
      type="button"
      class="list-group-item list-group-item-action"
      *ngIf="planet; else showTitleTemplate"
    >
      {{ planet.name }}
    </button>
    <ng-template #showTitleTemplate>
      <div class="placeholder-glow">
        <span class="placeholder w-100"></span>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class PlanetPreviewComponent implements OnInit {
  @Input({ required: true }) public planetUrl!: string;
  public planet!: IPlanet;

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getPlanetDetail();
  }

  private getPlanetDetail(): void {
    this.dataService
      .getItem<IPlanet>(this.planetUrl)
      .subscribe((planet) => (this.planet = planet));
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToPlanetDetail(planetUrl: string): void {
    const id = this.getId(planetUrl);
    if (id) {
      this.router.navigate(['/', 'planets', id]);
    } else {
      console.log('No detail for this planet');
    }
  }
}
