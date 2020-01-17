import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  shopImgUrl: string;
  @Input() product;
  
  constructor() {}

  ngOnInit(): void {
    this.product.shopImgURL = environment.apiURL + this.product.shopImgURL;
  }
}
