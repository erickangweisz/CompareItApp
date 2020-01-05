import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Location } from '@angular/common';
import { ProductService } from 'src/app/_services/product/product.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  showSpinner: boolean;
  products: [];

  term: string;
  shops: string;
  nProducts: number;

  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
    private location: Location) {
    this.showSpinner = false;
  }

  ngOnInit() {
    this._subscribeToStore();
  }

  _subscribeToStore(): void {
    this.store
      .subscribe(state => { 
        this.term = state.termInput;
        this.shops = state.selectShops;
        this.nProducts = state.nProductsSlide;
      });
  }

  searchProducts(): void {
    if (this.term && this.shops) {
      this.showSpinner = true;
      let params = this._getSearchParams();
      
      this.productService.get(params)
        .toPromise()
        .then(response => {
          //this.location.replaceState(response.url);
          this.products = response.body['resp'].products;
          this.term = '';
          this.showSpinner = false;
        })
        .catch(console.log);
    }
  }

  _getSearchParams(): HttpParams {
    let params = new HttpParams();
    return params.append('shops[]', this.shops)
                .append('term', this.term)
                .append('nProductsPerShop', this.nProducts.toString());
  }
}
