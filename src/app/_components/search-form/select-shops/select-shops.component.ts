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
  constructor(private store: Store<AppState>) {}

  onValChange(shops): void {
    this.setShopsToStore(shops);
  }

  setShopsToStore(shops): void {
    let action = new SelectShopsAction(shops);
    this.store.dispatch(action);
  }
}
