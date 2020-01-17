import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiURL + 'search';
  }

  get(params: HttpParams) {
    return this.http.get(this.apiUrl, {
      params: params,
      observe: 'response'
    })
  }
}
