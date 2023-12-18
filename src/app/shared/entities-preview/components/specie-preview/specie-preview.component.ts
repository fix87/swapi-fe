// Core
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { ISpecie } from '../../../../models';

@Component({
  selector: 'app-specie-preview',
  template: `
    <button
      (click)="goToSpecieDetail(specie.url)"
      type="button"
      class="list-group-item list-group-item-action"
      *ngIf="specie; else showTitleTemplate"
    >
      {{ specie.name }}
    </button>
    <ng-template #showTitleTemplate>
      <div class="placeholder-glow">
        <span class="placeholder w-100"></span>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class SpeciePreviewComponent implements OnInit {
  @Input({ required: true }) public specieUrl!: string;
  public specie!: ISpecie;

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getSpecieDetail();
  }

  private getSpecieDetail(): void {
    this.dataService
      .getItem<ISpecie>(this.specieUrl)
      .subscribe((specie) => (this.specie = specie));
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToSpecieDetail(specieUrl: string): void {
    const id = this.getId(specieUrl);
    if (id) {
      this.router.navigate(['/', 'species', id]);
    } else {
      console.log('No detail for this specie');
    }
  }
}
