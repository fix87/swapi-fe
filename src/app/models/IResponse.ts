import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle } from '.';

export interface IResponse {
  count: number;
  next: string;
  previous: string;
  results:
    | IFilm[]
    | IPeople[]
    | IPlanet[]
    | ISpecie[]
    | IStarship[]
    | IVehicle[];
}
