// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FilmsRoutingModule } from './films-routing.module';
import { MainLoaderModule } from '../../shared/main-loader/main-loader.module';

// Components
import { FilmsComponent } from './films.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

@NgModule({
  declarations: [FilmsComponent, FilmsListComponent, FilmDetailComponent],
  imports: [CommonModule, FilmsRoutingModule, MainLoaderModule],
})
export class FilmsModule {}
