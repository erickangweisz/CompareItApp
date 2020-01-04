import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/_services/product/product.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { TermInputAction } from 'src/app/store/term-input/term-input.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  apiUrl: string;
  showSpinner: boolean;
  products: [];

  term: string;
  shops: string;

  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
    private location: Location) {
    this.apiUrl = environment.apiURL;
    this.showSpinner = false;
  }

  ngOnInit() {
    this._subscribeToStore();
  }

  _subscribeToStore(): void {
    this.store
      .select('selectShops')
      .subscribe(state => { 
        this.shops = state
      });
  }

  searchProducts(): void {
    if (this.term) {
      this.showSpinner = true;
      let params = this._getSearchParams();
      
      this.productService.get(params)
        .toPromise()
        .then(response => {
          //this.location.replaceState(response.url);
          this.products = response.body['resp'].products;
          this._setTermToStore();
          this.showSpinner = false;
        })
        .catch(console.log);
    }
  }

  _getSearchParams(): HttpParams {
    let params = new HttpParams();
    return params.append('shops[]', this.shops)
                .append('term', this.term)
                .append('nProductsPerShop', '3');
  }

  _setTermToStore(): void {
    let action = new TermInputAction(this.term);
    this.store.dispatch(action);
  }
}
