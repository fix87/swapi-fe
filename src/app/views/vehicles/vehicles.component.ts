import { Component, OnInit } from '@angular/core';
import { IVehicle } from '../../models';
import { DataService } from '../../services/data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent implements OnInit {
  public showLoader = true;
  public vehicles: IVehicle[] = [];
  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getVehicles();
  }

  private getVehicles(): void {
    this.dataService
      .getItems<IVehicle>(this.dataService.rootEntrypoints.vehicles)
      .pipe(finalize(() => (this.showLoader = false)))
      .subscribe((response) => (this.vehicles = response.results));
  }
}
