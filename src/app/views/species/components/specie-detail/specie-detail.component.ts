// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';
import { IPlanet, ISpecie } from '../../../../models';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-specie-detail',
  templateUrl: './specie-detail.component.html',
  styleUrl: './specie-detail.component.scss',
})
export class SpecieDetailComponent implements OnInit {
  private specieId!: string;
  public specie!: ISpecie;
  public planet!: IPlanet;
  public loadingPlanet = false;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.specieId = this.activatedRoute.snapshot.params['id'];
  }

  public ngOnInit(): void {
    this.getSpecieDetail();
  }

  private getSpecieDetail(): void {
    this.dataService
      .getItem<ISpecie>(
        `${this.dataService.rootEntrypoints.species}${this.specieId}`
      )
      .subscribe((specie) => {
        this.specie = specie;
        if (this.specie.homeworld) {
          this.getHomeWorldDetail();
        }
      });
  }

  private getHomeWorldDetail(): void {
    this.loadingPlanet = true;
    this.dataService
      .getItem<IPlanet>(this.specie.homeworld)
      .pipe(finalize(() => (this.loadingPlanet = false)))
      .subscribe((planet) => (this.planet = planet));
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToPlanetDetail(planetUrl: string): void {
    const id = this.getId(planetUrl);
    if (id) {
      this.router.navigate(['/', 'planets', id]);
    } else {
      console.log('No detail for this planet');
    }
  }
}
