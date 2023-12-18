// Core
import { Component, Input, OnInit } from '@angular/core';

// Servics

// Models
import { IStarship } from '../../../../models';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starship-preview',
  template: `
    <button
      (click)="goToStarshipDetail(starship.url)"
      type="button"
      class="list-group-item list-group-item-action"
      *ngIf="starship; else showTitleTemplate"
    >
      {{ starship.name }}
    </button>
    <ng-template #showTitleTemplate>
      <div class="placeholder-glow">
        <span class="placeholder w-100"></span>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class StarshipPreviewComponent implements OnInit {
  @Input({ required: true }) public starshipUrl!: string;
  public starship!: IStarship;

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getStarshipDetail();
  }

  private getStarshipDetail(): void {
    this.dataService
      .getItem<IStarship>(this.starshipUrl)
      .subscribe((starship) => (this.starship = starship));
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToStarshipDetail(filmUrl: string): void {
    const id = this.getId(filmUrl);
    if (id) {
      this.router.navigate(['/', 'starships', id]);
    } else {
      console.log('No detail for this starship');
    }
  }
}
