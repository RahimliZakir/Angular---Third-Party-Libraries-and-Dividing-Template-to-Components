import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  products: Product[] =
    [
      {
        id: 1,
        imgUrl: "https://picsum.photos/id/120/200/300",
        price: 15.00,
        title: "Samsung - 1",
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      },
      {
        id: 2,
        imgUrl: "https://picsum.photos/id/121/200/300",
        price: 23.99,
        title: "Samsung - 2",
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      }, {
        id: 3,
        imgUrl: "https://picsum.photos/id/122/200/300",
        price: 89.32,
        title: "Apple - 1",
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      }, {
        id: 4,
        imgUrl: "https://picsum.photos/id/123/200/300",
        price: 45.68,
        title: "Apple - 2",
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      }
    ];

  GetProducts(): Product[] {

    return this.products;
  }

  GetProductById(id: number): Product {

    return this.products.filter(item => item.id == id)[0];
  }
}
