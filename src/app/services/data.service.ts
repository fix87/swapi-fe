import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject, finalize } from 'rxjs';

import {
  IFilm,
  IPeople,
  IPlanet,
  IResponse,
  IRootEntrypoints,
  ISpecie,
  IStarship,
  IVehicle,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public rootEntrypointsReady$: Subject<boolean> = new Subject();
  private baseUrl = 'https://swapi.dev/api/';
  private _rootEntrypoints!: IRootEntrypoints;
  public get rootEntrypoints(): IRootEntrypoints {
    return this._rootEntrypoints;
  }

  public constructor(private http: HttpClient) {
    this.getRootEntrypoints();
  }

  private getRootEntrypoints(): void {
    this.http
      .get<IRootEntrypoints>(this.baseUrl)
      .pipe(finalize(() => this.rootEntrypointsReady$.next(true)))
      .subscribe((response) => (this._rootEntrypoints = response));
  }

  public getItems<
    T extends IFilm | IPeople | IPlanet | ISpecie | IStarship | IVehicle
  >(url: string): Observable<IResponse<T>> {
    return this.http.get<IResponse<T>>(url);
  }

  public getItem<
    T extends IFilm | IPeople | IPlanet | ISpecie | IStarship | IVehicle
  >(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
