import { Component } from '@angular/core';

import { Subject } from 'rxjs';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public dataIsReady$: Subject<boolean>;

  public constructor(private dataService: DataService) {
    this.dataIsReady$ = this.dataService.dataIsReady$;
  }
}
