// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../../../services/data.service';
import { IPeople, IPlanet, ISpecie } from '../../../../models';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss',
})
export class PeopleDetailComponent implements OnInit {
  private peopleId!: string;
  public person!: IPeople;
  public planet!: IPlanet;
  public specie!: ISpecie;
  public loadingPlanet = false;
  public loadingSpecie = false;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.peopleId = this.activatedRoute.snapshot.params['id'];
  }

  public ngOnInit(): void {
    this.getPersonDetail();
  }

  private getPersonDetail(): void {
    this.dataService
      .getItem<IPeople>(
        `${this.dataService.rootEntrypoints.people}${this.peopleId}`
      )
      .subscribe((person) => {
        this.person = person;
        if (this.person.homeworld) {
          this.getHomeWorldDetail();
        }
        if (this.person.species.length) {
          this.getSpecieDetail();
        }
      });
  }

  private getHomeWorldDetail(): void {
    this.loadingPlanet = true;
    this.dataService
      .getItem<IPlanet>(this.person.homeworld)
      .pipe(finalize(() => (this.loadingPlanet = false)))
      .subscribe((planet) => (this.planet = planet));
  }

  private getSpecieDetail(): void {
    this.loadingSpecie = true;
    this.dataService
      .getItem<ISpecie>(this.person.species[0])
      .pipe(finalize(() => (this.loadingSpecie = false)))
      .subscribe((specie) => (this.specie = specie));
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

  public goToSpecieDetail(specieUrl: string): void {
    const id = this.getId(specieUrl);
    if (id) {
      this.router.navigate(['/', 'species', id]);
    } else {
      console.log('No detail for this specie');
    }
  }
}
