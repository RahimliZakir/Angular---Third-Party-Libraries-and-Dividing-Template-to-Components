import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], searchText: string): Product[] {
    searchText = searchText.toLowerCase();

    return products.filter(function (item, index, arr) {
      return item.title.toLowerCase().indexOf(searchText) != -1
    });
  }

}
