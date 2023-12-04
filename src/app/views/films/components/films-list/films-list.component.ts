// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IFilm, IResponse } from '../../../../models';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.scss',
})
export class FilmsListComponent implements OnInit {
  private _showLoader = false;
  public get showLoader(): boolean {
    return this._showLoader;
  }
  private filmsResponse: IResponse<IFilm> = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public get films(): IFilm[] {
    return this.filmsResponse.results;
  }
  public get isNextPagePresent(): boolean {
    return !!this.filmsResponse.next;
  }
  public get isPreviousPagePresent(): boolean {
    return !!this.filmsResponse.previous;
  }
  public get totalResults(): number {
    return this.filmsResponse.count;
  }

  public constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.getFilms(this.dataService.rootEntrypoints.films);
  }

  private getFilms(url: string): void {
    this._showLoader = true;
    this.dataService
      .getItems<IFilm>(url)
      .pipe(finalize(() => (this._showLoader = false)))
      .subscribe((response) => (this.filmsResponse = response));
  }

  public nextPage(): void {
    this.getFilms(this.filmsResponse.next);
  }

  public previousPage(): void {
    this.getFilms(this.filmsResponse.previous);
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToFilmDetail(filmUrl: string): void {
    const id = this.getId(filmUrl);
    if (id) {
      this.router.navigate([id], {
        relativeTo: this.activatedRoute,
      });
    } else {
      console.log('No detail for this film');
    }
  }
}
