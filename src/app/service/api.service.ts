import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "./assets/json-files/porducts.json";

  constructor(private http: HttpClient) { } 

  // Generate Get Methode to View Products
  getProduct() {
    return this.http.get(this.baseURL);
  }
  
}
