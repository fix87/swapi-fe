// Core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../services/data.service';

// Models
import { IPlanet, IResponse } from '../../models';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss',
})
export class PlanetsComponent implements OnInit {
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
    private router: Router
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
      this.router.navigate([id]);
    } else {
      console.log('No detail for this planet');
    }
  }
}
