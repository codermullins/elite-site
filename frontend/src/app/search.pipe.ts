import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], searchQuery: any): any[] {
    if (!searchQuery) {
      return products
    }
    return products.filter((product) => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))
  }

}
