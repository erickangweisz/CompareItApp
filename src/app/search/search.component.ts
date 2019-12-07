import {Component, OnInit} from '@angular/core';
import {SearchService} from '../_services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    const urlParams = location.search;

    if (urlParams) {
      this.searchService.getProducts(urlParams).subscribe(res => {
        console.log(res);
        //TODO: fill app-product-list with products
        //products = res.products;
      });

      //Example
      this.products = [
        {name: 'Xiaomi MI A2', price: 165.99, url: 'url'},
        {name: 'Xiaomi MI A2 Lite', price: 144.99, url: 'url'}
      ];
    } else {
      console.log('No params provided');
    }
  }
}
