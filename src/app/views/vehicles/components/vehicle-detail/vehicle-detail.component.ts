// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IVehicle } from '../../../../models';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.scss',
})
export class VehicleDetailComponent implements OnInit {
  private vehicleId!: string;
  public vehicle!: IVehicle;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.vehicleId = this.activatedRoute.snapshot.params['id'];
  }

  public ngOnInit(): void {
    this.getVehicleDetail();
  }

  private getVehicleDetail(): void {
    this.dataService
      .getItem<IVehicle>(
        `${this.dataService.rootEntrypoints.vehicles}${this.vehicleId}`
      )
      .subscribe((vehicle) => (this.vehicle = vehicle));
  }
}
