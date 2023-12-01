import { Component, OnInit } from '@angular/core';
import { IFilm } from '../../models';
import { DataService } from '../../services/data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
})
export class FilmsComponent implements OnInit {
  public showLoader = true;
  public films: IFilm[] = [];
  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getFilms();
  }

  private getFilms(): void {
    this.dataService
      .getItems<IFilm>(this.dataService.rootEntrypoints.people)
      .pipe(finalize(() => (this.showLoader = false)))
      .subscribe((response) => (this.films = response.results));
  }
}
