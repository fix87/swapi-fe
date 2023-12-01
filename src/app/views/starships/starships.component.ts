import { Component, OnInit } from '@angular/core';
import { IStarship } from '../../models';
import { DataService } from '../../services/data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss',
})
export class StarshipsComponent implements OnInit {
  public showLoader = true;
  public starhsips: IStarship[] = [];
  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getStarships();
  }

  private getStarships(): void {
    this.dataService
      .getItems<IStarship>(this.dataService.rootEntrypoints.starships)
      .pipe(finalize(() => (this.showLoader = false)))
      .subscribe((response) => (this.starhsips = response.results));
  }
}
