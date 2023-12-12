// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  public constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
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
        this.getHomeWorldDetail();
        this.getSpecieDetail();
      });
  }

  private getHomeWorldDetail(): void {
    this.dataService
      .getItem<IPlanet>(this.person.homeworld)
      .subscribe((planet) => (this.planet = planet));
  }

  private getSpecieDetail(): void {
    this.dataService
      .getItem<ISpecie>(this.person.species[0])
      .subscribe((specie) => (this.specie = specie));
  }
}
