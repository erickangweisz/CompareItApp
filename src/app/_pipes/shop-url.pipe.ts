import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shopURL'
})
export class ShopURLPipe implements PipeTransform {

  transform(shopname: string, ...args: string[]): string {
    switch (shopname) {
      case 'pccomponentes.com':
        return 'http://localhost:3087/api/imag/pccomponentes';
      default:
        return shopname;
    }
  }

}
