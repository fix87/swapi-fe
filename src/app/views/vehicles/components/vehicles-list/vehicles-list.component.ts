// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IResponse, IVehicle } from '../../../../models';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss',
})
export class VehiclesListComponent implements OnInit {
  private _showLoader = false;
  public get showLoader(): boolean {
    return this._showLoader;
  }
  private vehiclesResponse: IResponse<IVehicle> = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public get vehicles(): IVehicle[] {
    return this.vehiclesResponse.results;
  }
  public get isNextPagePresent(): boolean {
    return !!this.vehiclesResponse.next;
  }
  public get isPreviousPagePresent(): boolean {
    return !!this.vehiclesResponse.previous;
  }
  public get totalResults(): number {
    return this.vehiclesResponse.count;
  }

  public constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.getVehicles(this.dataService.rootEntrypoints.vehicles);
  }

  private getVehicles(url: string): void {
    this._showLoader = true;
    this.dataService
      .getItems<IVehicle>(url)
      .pipe(finalize(() => (this._showLoader = false)))
      .subscribe((response) => (this.vehiclesResponse = response));
  }

  public nextPage(): void {
    this.getVehicles(this.vehiclesResponse.next);
  }

  public previousPage(): void {
    this.getVehicles(this.vehiclesResponse.previous);
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToVehicleDetail(vehicleUrl: string): void {
    const id = this.getId(vehicleUrl);
    if (id) {
      this.router.navigate([id], { relativeTo: this.activatedRoute });
    } else {
      console.log('No detail for this vehicle');
    }
  }
}
