import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(
    private searchService: SearchService
  ){}

  ngOnInit() {
    const urlParams = location.search;

    if (urlParams) {
      this.searchService.getProducts(urlParams)
        .subscribe(res => {
          console.log(res);

        //TODO: fill app-product-list con products
      });
    } else {
      console.log('No params provided');
    }
  }
}
