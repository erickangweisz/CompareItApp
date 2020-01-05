import { Component } from '@angular/core';
import { TermInputAction } from 'src/app/store/term-input/term-input.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-term-input',
  templateUrl: './term-input.component.html',
  styleUrls: ['./term-input.component.scss']
})
export class TermInputComponent {
  constructor(private store: Store<AppState>) {}

  setTermToStore(termValue: string): void {
    let action = new TermInputAction(termValue);
    this.store.dispatch(action);
  }
}
