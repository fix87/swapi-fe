// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';
import { IPeople } from '../../../../models';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss',
})
export class PeopleDetailComponent implements OnInit {
  private peopleId!: string;
  public person!: IPeople;

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
      .subscribe((person) => (this.person = person));
  }
}
