import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  apiUrl: string;
  showSpinner: boolean;
  products: [];

  constructor(
    private productService: ProductService,
    private location: Location) {
    this.apiUrl = environment.apiURL;
    this.showSpinner = false;
  }

  ngOnInit() {
    this.searchProducts();
  }

  searchProducts() {
    this.showSpinner = true;

    let params = new HttpParams();
    params = params.append('shops[]', 'pccomponentes')
                   .append('term', 'asus zenbook')
                   .append('nProductsPerShop', '3')
    this.productService.get(params)
      .toPromise()
      .then(response => {
        //this.location.replaceState(response.url);
        this.products = response.body['resp'].products;
        this.showSpinner = false;
      })
      .catch(console.log);
  }
}
