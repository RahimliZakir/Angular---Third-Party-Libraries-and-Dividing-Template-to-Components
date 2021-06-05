import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  searchText: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.GetProducts();
  }

}
