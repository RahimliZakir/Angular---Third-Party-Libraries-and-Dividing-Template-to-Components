import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { AlertifyService } from 'src/services/alertify.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {

  productId: number = 0;
  name: string = '';

  products: Product[] = [];

  productDetails: any = {};

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private alertifyJS: AlertifyService) { }

  ngOnInit() {
    // Route
    this.activatedRoute.params.subscribe(param => {
      this.productId = param['productId'];

      this.productDetails = this.productService.GetProductById(this.productId);

      if (this.productId <= 0 || this.productDetails == undefined) {

        this.alertifyJS.error("Belə məhsul yoxdur!");

        return;
      }
    });

    // QueryString
    this.activatedRoute.queryParams.subscribe(query => {
      this.name = query["name"];
    });
  }

}
