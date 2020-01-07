import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_store/app.reducers';
import { NProductsSlideAction } from 'src/app/_store/nproducts-slide/nproducts-slide.actions';

@Component({
  selector: 'app-nproducts-slide',
  templateUrl: './nproducts-slide.component.html',
  styleUrls: ['./nproducts-slide.component.scss']
})
export class NproductsSlideComponent {
  constructor(private store: Store<AppState>) {}

  numberOfProductsSelector(nProducts: number): number {
    if (nProducts > 10)
      return nProducts;

    this.setNProductsToStore(nProducts);
    return nProducts;
  }

  setNProductsToStore(nProducts: number): void {
    let action = new NProductsSlideAction(nProducts);
    this.store.dispatch(action);
  }
}
