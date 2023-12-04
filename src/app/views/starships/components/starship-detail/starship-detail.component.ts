// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IStarship } from '../../../../models';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.scss',
})
export class StarshipDetailComponent implements OnInit {
  private starshipId!: string;
  public starship!: IStarship;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.starshipId = this.activatedRoute.snapshot.params['id'];
  }

  public ngOnInit(): void {
    this.getStarshipDetail();
  }

  private getStarshipDetail(): void {
    this.dataService
      .getItem<IStarship>(
        `${this.dataService.rootEntrypoints.starships}${this.starshipId}`
      )
      .subscribe((starship) => (this.starship = starship));
  }
}
