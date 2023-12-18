// Core
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from '../../../../services/data.service';

// Models
import { IVehicle } from '../../../../models';

@Component({
  selector: 'app-vehicle-preview',
  template: `
    <button
      (click)="goToVehicleDetail(vehicle.url)"
      type="button"
      class="list-group-item list-group-item-action"
      *ngIf="vehicle; else showTitleTemplate"
    >
      {{ vehicle.name }}
    </button>
    <ng-template #showTitleTemplate>
      <div class="placeholder-glow">
        <span class="placeholder w-100"></span>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class VehiclePreviewComponent implements OnInit {
  @Input({ required: true }) public vehicleUrl!: string;
  public vehicle!: IVehicle;

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getVehicleDetail();
  }

  private getVehicleDetail(): void {
    this.dataService
      .getItem<IVehicle>(this.vehicleUrl)
      .subscribe((vehicle) => (this.vehicle = vehicle));
  }

  private getId(url: string): string {
    const splittedString = url.split('/');
    const id = splittedString.at(splittedString.length - 2);
    return id || '';
  }

  public goToVehicleDetail(vehicleUrl: string): void {
    const id = this.getId(vehicleUrl);
    if (id) {
      this.router.navigate(['/', 'vehicles', id]);
    } else {
      console.log('No detail for this vehicle');
    }
  }
}
