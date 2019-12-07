import {Component, OnInit} from '@angular/core';
import {SearchService} from '../_services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    const urlParams = location.search;

    if (urlParams) {
      this.searchService.getProducts(urlParams).subscribe(res => {
        this.products = res['resp'].products;
      });
    } else {
      console.log('No params provided');
    }
  }
}
