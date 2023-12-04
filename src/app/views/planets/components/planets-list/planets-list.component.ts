// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IPlanet, IResponse } from '../../../../models';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.scss',
})
export class PlanetsListComponent implements OnInit {
  private _showLoader = false;
  public get showLoader(): boolean {
    return this._showLoader;
  }
  private planetsResponse: IResponse<IPlanet> = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public get planets(): IPlanet[] {
    return this.planetsResponse.results;
  }
  public get isNextPagePresent(): boolean {
    return !!this.planetsResponse.next;
  }
  public get isPreviousPagePresent(): boolean {
    return !!this.planetsResponse.previous;
  }
  public get totalResults(): number {
    return this.planetsResponse.count;
  }

  public constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.getPlanets(this.dataService.rootEntrypoints.planets);
  }

  private getPlanets(url: string): void {
    this._showLoader = true;
    this.dataService
      .getItems<IPlanet>(url)
      .pipe(finalize(() => (this._showLoader = false)))
      .subscribe((response) => (this.planetsResponse = response));
  }

  public nextPage(): void {
    this.getPlanets(this.planetsResponse.next);
  }

  public previousPage(): void {
    this.getPlanets(this.planetsResponse.previous);
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToPlanetDetail(planetUrl: string): void {
    const id = this.getId(planetUrl);
    if (id) {
      this.router.navigate([id], { relativeTo: this.activatedRoute });
    } else {
      console.log('No detail for this planet');
    }
  }
}
