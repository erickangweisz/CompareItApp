import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/_services/product/product.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { SearchInputAction } from 'src/app/store/search-params/search-params.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  apiUrl: string;
  showSpinner: boolean;
  products: [];

  term: string

  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
    private location: Location) {
    this.apiUrl = environment.apiURL;
    this.showSpinner = false;
  }

  ngOnInit() {
    this.subscribeToStore();
  }

  subscribeToStore() {
    this.store
      .select('searchParams')
      .subscribe(state => console.log(state));
  }

  searchProducts() {
    if (this.term) {
      this.showSpinner = true;
      let params = this.getSearchParams();
      
      this.productService.get(params)
        .toPromise()
        .then(response => {
          //this.location.replaceState(response.url);
          this.products = response.body['resp'].products;
          this.setTermToStore();
          this.showSpinner = false;
        })
        .catch(console.log);
    }
  }

  getSearchParams(): HttpParams {
    let params = new HttpParams();
    return params.append('shops[]', 'pccomponentes')
                .append('term', this.term)
                .append('nProductsPerShop', '3');
  }

  setTermToStore() {
    let action = new SearchInputAction(this.term);
    this.store.dispatch(action);
  }
}
