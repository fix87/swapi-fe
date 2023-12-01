// Core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../services/data.service';

// Models
import { ISpecie, IResponse } from '../../models';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss',
})
export class SpeciesComponent implements OnInit {
  private _showLoader = false;
  public get showLoader(): boolean {
    return this._showLoader;
  }
  private speciesResponse: IResponse<ISpecie> = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public get species(): ISpecie[] {
    return this.speciesResponse.results;
  }
  public get isNextPagePresent(): boolean {
    return !!this.speciesResponse.next;
  }
  public get isPreviousPagePresent(): boolean {
    return !!this.speciesResponse.previous;
  }
  public get totalResults(): number {
    return this.speciesResponse.count;
  }

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getSpecies(this.dataService.rootEntrypoints.species);
  }

  private getSpecies(url: string): void {
    this._showLoader = true;
    this.dataService
      .getItems<ISpecie>(url)
      .pipe(finalize(() => (this._showLoader = false)))
      .subscribe((response) => (this.speciesResponse = response));
  }

  public nextPage(): void {
    this.getSpecies(this.speciesResponse.next);
  }

  public previousPage(): void {
    this.getSpecies(this.speciesResponse.previous);
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToSpecieDetail(specieUrl: string): void {
    const id = this.getId(specieUrl);
    if (id) {
      this.router.navigate([id]);
    } else {
      console.log('No detail for this specie');
    }
  }
}
