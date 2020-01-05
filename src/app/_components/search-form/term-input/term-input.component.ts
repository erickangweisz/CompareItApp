import { Component } from '@angular/core';
import { TermInputAction } from 'src/app/store/term-input/term-input.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import { SearchFormComponent } from 'src/app/_components/search-form/search-form.component';

@Component({
  selector: 'app-term-input',
  templateUrl: './term-input.component.html',
  styleUrls: ['./term-input.component.scss']
})
export class TermInputComponent {
  constructor(
    private store: Store<AppState>,
    private searchForm: SearchFormComponent) {}

  setTermToStore(termValue: string): void {
    let action = new TermInputAction(termValue);
    this.store.dispatch(action);
  }

  searchProducts(): void {
    this.searchForm.searchProducts();
  }
}
