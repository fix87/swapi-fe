// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { YavinBattlePipe } from './yavin-battle.pipe';

@NgModule({
  declarations: [YavinBattlePipe],
  imports: [CommonModule],
  exports: [YavinBattlePipe],
})
export class PipesModule {}
