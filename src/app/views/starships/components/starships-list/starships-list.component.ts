// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IResponse, IStarship } from '../../../../models';

@Component({
  selector: 'app-starhips-list',
  templateUrl: './starships-list.component.html',
  styleUrl: './starships-list.component.scss',
})
export class StarshipsListComponent implements OnInit {
  private _showLoader = false;
  public get showLoader(): boolean {
    return this._showLoader;
  }
  private starshipsResponse: IResponse<IStarship> = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public get starships(): IStarship[] {
    return this.starshipsResponse.results;
  }
  public get isNextPagePresent(): boolean {
    return !!this.starshipsResponse.next;
  }
  public get isPreviousPagePresent(): boolean {
    return !!this.starshipsResponse.previous;
  }
  public get totalResults(): number {
    return this.starshipsResponse.count;
  }

  public constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.getStasrhips(this.dataService.rootEntrypoints.starships);
  }

  private getStasrhips(url: string): void {
    this._showLoader = true;
    this.dataService
      .getItems<IStarship>(url)
      .pipe(finalize(() => (this._showLoader = false)))
      .subscribe((response) => (this.starshipsResponse = response));
  }

  public nextPage(): void {
    this.getStasrhips(this.starshipsResponse.next);
  }

  public previousPage(): void {
    this.getStasrhips(this.starshipsResponse.previous);
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToStarshipDetail(starhipUrl: string): void {
    const id = this.getId(starhipUrl);
    if (id) {
      this.router.navigate([id], { relativeTo: this.activatedRoute });
    } else {
      console.log('No detail for this vehicle');
    }
  }
}
