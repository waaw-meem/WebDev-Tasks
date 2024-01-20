import { Component } from '@angular/core';
import { ProductInfo } from './product.modal';

@Component({
  selector: 'app-property-catalogue',
  templateUrl: './property-catalogue.component.html',
  styleUrls: ['./property-catalogue.component.css']
})
export class PropertyCatalogueComponent {
  productDetail: ProductInfo[] =[
  new ProductInfo('Recipe 1', 'This is our first recipe', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',22),
  new ProductInfo('Recipe 2', 'This is our Second recipe', 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',43)
  ]

selectedProduct: any;
showSpecificInfo = false

onSelectProduct(productDetail: any): void {
  this.selectedProduct = productDetail;

  this.showSpecificInfo = true
}



}
