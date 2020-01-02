import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiURL;
  }

  getProducts(urlParams: string) {
    return this.http.get(`${this.apiUrl}/search${urlParams}`);
  }
}
