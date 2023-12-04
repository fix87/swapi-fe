// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';
import { IPlanet } from '../../../../models';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss',
})
export class PlanetDetailComponent implements OnInit {
  private planetId!: string;
  public planet!: IPlanet;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.planetId = this.activatedRoute.snapshot.params['id'];
  }

  public ngOnInit(): void {
    this.getPlanetDetail();
  }

  private getPlanetDetail(): void {
    this.dataService
      .getItem<IPlanet>(
        `${this.dataService.rootEntrypoints.planets}${this.planetId}`
      )
      .subscribe((planet) => (this.planet = planet));
  }
}
