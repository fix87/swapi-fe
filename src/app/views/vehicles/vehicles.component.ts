// Core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Libraries
import { finalize } from 'rxjs';

// Services
import { DataService } from '../../services/data.service';

// Models
import { IResponse, IVehicle } from '../../models';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent implements OnInit {
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
    private router: Router
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
      this.router.navigate([id]);
    } else {
      console.log('No detail for this vehicle');
    }
  }
}
