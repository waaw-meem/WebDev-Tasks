import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() productName!: string;
  @Input() productPrice!: number;
  @Input() productDescription!: string;
}
