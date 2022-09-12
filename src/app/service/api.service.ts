import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "./assets/json-files/porducts.json";
  baseURL2: string = "./assets/json-files/orders.json";
  baseURL3: string = "./assets/json-files/users.json";

  constructor(private http: HttpClient) { } 

  // Generate Get Methode to View Products
  getProduct() {
    return this.http.get(this.baseURL);
  }

  // Generate Get Methode to View Products
  getOrders() {
    return this.http.get(this.baseURL2);
  }

  // Generate Get Order Details
  getOrderDetails(id:any) {
    return this.http.get(this.baseURL2).pipe(
      map((data:any) => {
        console.log(data);
        return data.filter((ele:any) => ele.OrderId == id)
      })
    );
  }

  // Generate Get User Details
  getUserDetails(id:any) {
    return this.http.get(this.baseURL3).pipe(
      map((data:any) => {
        console.log(data);
        return data.filter((ele:any) => ele.Id == id)
      })
    );
  }
  
}
