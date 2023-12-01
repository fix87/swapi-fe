// Core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../services/data.service';

// Models
import { IPeople, IResponse } from '../../models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
})
export class PeopleComponent implements OnInit {
  private _showLoader = false;
  public get showLoader(): boolean {
    return this._showLoader;
  }
  private peopleResponse: IResponse<IPeople> = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public get people(): IPeople[] {
    return this.peopleResponse.results;
  }
  public get isNextPagePresent(): boolean {
    return !!this.peopleResponse.next;
  }
  public get isPreviousPagePresent(): boolean {
    return !!this.peopleResponse.previous;
  }
  public get totalResults(): number {
    return this.peopleResponse.count;
  }

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getPeople(this.dataService.rootEntrypoints.people);
  }

  private getPeople(url: string): void {
    this._showLoader = true;
    this.dataService
      .getItems<IPeople>(url)
      .pipe(finalize(() => (this._showLoader = false)))
      .subscribe((response) => (this.peopleResponse = response));
  }

  public nextPage(): void {
    this.getPeople(this.peopleResponse.next);
  }

  public previousPage(): void {
    this.getPeople(this.peopleResponse.previous);
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToPersonDetail(personUrl: string): void {
    const id = this.getId(personUrl);
    if (id) {
      this.router.navigate([id]);
    } else {
      console.log('No detail for this person');
    }
  }
}
