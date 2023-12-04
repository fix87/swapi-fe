// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';
import { ISpecie } from '../../../../models';

@Component({
  selector: 'app-specie-detail',
  templateUrl: './specie-detail.component.html',
  styleUrl: './specie-detail.component.scss',
})
export class SpecieDetailComponent implements OnInit {
  private specieId!: string;
  public specie!: ISpecie;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
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
      .subscribe((specie) => (this.specie = specie));
  }
}
