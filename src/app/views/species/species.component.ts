import { Component, OnInit } from '@angular/core';
import { ISpecie } from '../../models';
import { DataService } from '../../services/data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss',
})
export class SpeciesComponent implements OnInit {
  public showLoader = true;
  public species: ISpecie[] = [];
  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getSpecies();
  }

  private getSpecies(): void {
    this.dataService
      .getItems<ISpecie>(this.dataService.rootEntrypoints.species)
      .pipe(finalize(() => (this.showLoader = false)))
      .subscribe((response) => (this.species = response.results));
  }
}
