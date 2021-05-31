import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products: any[] = [];

  productDetails: any = {};

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        imgUrl: "https://picsum.photos/id/120/200/300",
        title: "Samsung - 1",
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      },
      {
        id: 2,
        imgUrl: "https://picsum.photos/id/121/200/300",
        title: "Samsung - 2",
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      }, {
        id: 3,
        imgUrl: "https://picsum.photos/id/122/200/300",
        title: "Apple - 1",
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      }, {
        id: 4,
        imgUrl: "https://picsum.photos/id/123/200/300",
        title: "Apple - 2",
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'
      }
    ];

    this.productDetails = this.products[0];
  }

}
