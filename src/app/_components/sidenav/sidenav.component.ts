import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_store/app.reducers';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  opened: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('sidenav')
      .subscribe(state => this.opened = state);
  }
}
