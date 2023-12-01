import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLoaderComponent as MainLoaderComponent } from './main-loader.component';

@NgModule({
  declarations: [MainLoaderComponent],
  imports: [CommonModule],
  exports: [MainLoaderComponent],
})
export class MainLoaderModule {}
