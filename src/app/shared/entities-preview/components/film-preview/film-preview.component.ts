// Core
import { Component, Input, OnInit } from '@angular/core';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IFilm } from '../../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-preview',
  template: `
    <button
      (click)="goToFilmDetail(film.url)"
      type="button"
      class="list-group-item list-group-item-action"
      *ngIf="film; else showTitleTemplate"
    >
      {{ film.title }}
    </button>
    <ng-template #showTitleTemplate>
      <div class="placeholder-glow">
        <span class="placeholder w-100"></span>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class FilmPreviewComponent implements OnInit {
  @Input({ required: true }) public filmUrl!: string;
  public film!: IFilm;

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getFilmDetail();
  }

  private getFilmDetail(): void {
    this.dataService
      .getItem<IFilm>(this.filmUrl)
      .subscribe((film) => (this.film = film));
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToFilmDetail(filmUrl: string): void {
    const id = this.getId(filmUrl);
    if (id) {
      this.router.navigate(['/', 'films', id]);
    } else {
      console.log('No detail for this person');
    }
  }
}
