import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'YavinBattle',
})
export class YavinBattlePipe implements PipeTransform {
  public transform(value: string): string {
    const includesBBY = value.includes('BBY');
    const stringToReplace = includesBBY ? 'BBY' : 'ABY';
    const replaceWith = includesBBY
      ? ' Before Battle of Yavin'
      : ' After Battle of Yavin';
    return value.replace(stringToReplace, replaceWith);
  }
}
