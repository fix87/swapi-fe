import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'YavinBattle',
})
export class YavinBattlePipe implements PipeTransform {
  public transform(value: string): string {
    return value
      .replace('BBY', ' Before Battle of Yavin')
      .replace('ABY', ' After Battle of Yavin');
  }
}
