import { Component } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { SelectShopsAction } from 'src/app/store/select-shops/select-shops.actions';

@Component({
  selector: 'app-select-shops',
  templateUrl: './select-shops.component.html',
  styleUrls: ['./select-shops.component.scss']
})
export class SelectShopsComponent {
  readonly pccomponentesURL: string;
  readonly amazonURL: string;
  readonly aliexpressURL: string;

  constructor(private store: Store<AppState>) {
    this.pccomponentesURL = 'http://localhost:3087/api/logo/pccomponentes';
    this.amazonURL        = 'http://localhost:3087/api/logo/amazon';
    this.aliexpressURL    = 'http://localhost:3087/api/logo/aliexpress';
  }

  onValChange(shops): void {
    this.setShopsToStore(shops);
  }

  setShopsToStore(shops): void {
    let action = new SelectShopsAction(shops);
    this.store.dispatch(action);
  }
}
