import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "product/:productId", component: ProductDetailsComponent },
  // Path bosh olsa "product"-a qaytarir, "pathMatch"-de de tam ust-uste dushmeyini gosteririk. 
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
