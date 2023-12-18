// Core
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IPeople } from '../../../../models';

@Component({
  selector: 'app-people-preview',
  template: `
    <button
      (click)="goToPersonDetail(person.url)"
      type="button"
      class="list-group-item list-group-item-action"
      *ngIf="person; else showTitleTemplate"
    >
      {{ person.name }}
    </button>
    <ng-template #showTitleTemplate>
      <div class="placeholder-glow">
        <span class="placeholder w-100"></span>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class PeoplePreviewComponent implements OnInit {
  @Input({ required: true }) public personUrl!: string;
  public person!: IPeople;

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getPersonDetail();
  }

  private getPersonDetail(): void {
    this.dataService
      .getItem<IPeople>(this.personUrl)
      .subscribe((person) => (this.person = person));
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToPersonDetail(personUrl: string): void {
    const id = this.getId(personUrl);
    if (id) {
      this.router.navigate(['/', 'people', id]);
    } else {
      console.log('No detail for this person');
    }
  }
}
