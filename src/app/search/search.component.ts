import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const urlParams = location.search;

    if (urlParams) {
      console.log('Abemus params', urlParams);

      //TODO: call api
      
      //TODO: fill app-product-list con los products que devuelva la api

    } else {
      console.log('No params bruh');
    }
  }
}
