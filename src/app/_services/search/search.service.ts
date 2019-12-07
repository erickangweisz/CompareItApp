import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrl = environment.apiURL;
  
  constructor(
    private http: HttpClient,
  ) {}

  getProducts() {
    
  }
}
