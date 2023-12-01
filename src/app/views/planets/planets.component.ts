import { Component, OnInit } from '@angular/core';
import { IPlanet } from '../../models';
import { DataService } from '../../services/data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss',
})
export class PlanetsComponent implements OnInit {
  public showLoader = true;
  public planets: IPlanet[] = [];
  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getPlanets();
  }

  private getPlanets(): void {
    this.dataService
      .getItems<IPlanet>(this.dataService.rootEntrypoints.planets)
      .pipe(finalize(() => (this.showLoader = false)))
      .subscribe((response) => (this.planets = response.results));
  }
}
