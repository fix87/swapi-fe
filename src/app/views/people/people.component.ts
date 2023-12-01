import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPeople } from '../../models';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
})
export class PeopleComponent implements OnInit {
  public showLoader = true;
  public people: IPeople[] = [];
  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getPeople();
  }

  private getPeople(): void {
    this.dataService
      .getItems<IPeople>(this.dataService.rootEntrypoints.people)
      .pipe(finalize(() => (this.showLoader = false)))
      .subscribe((response) => (this.people = response.results));
  }
}
