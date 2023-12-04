// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IFilm } from '../../../../models';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss',
})
export class FilmDetailComponent implements OnInit {
  private filmId!: string;
  public film!: IFilm;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.filmId = this.activatedRoute.snapshot.params['id'];
  }

  public ngOnInit(): void {
    this.getFilmDetail();
  }

  private getFilmDetail(): void {
    this.dataService
      .getItem<IFilm>(`${this.dataService.rootEntrypoints.films}${this.filmId}`)
      .subscribe((film) => (this.film = film));
  }
}
