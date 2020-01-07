import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  shopname: string;
  @Input() product;

  constructor() {}

  ngOnInit(): void {
    this.shopname = this.product['shopname']
  }
}
