import { Order, productsOrder } from './../modal/order';
import { Product } from './../modal/product';

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

  ordersList:Order[]=[];
  productsList: Product []=[];
  productArray=[];
  orderArray:[]=[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe((data) => {
      this.productsList = data as Product [];
    });
    this.api.getOrders().subscribe((data) => {
      this.ordersList =data as Order[];
      this.ordersList.forEach(element => {
        let total=0;
        element.Products?.forEach(product => {
        let oneProduct=this.productsList.filter(i=>{
          return i.ProductId==product.ProductId
          }
            )[0]
            
            if(oneProduct?.ProductPrice && product?.Quantity)
            total=total+(oneProduct?.ProductPrice * product?.Quantity)
          });
          element.total=total;
    });
    
    });


  

  }

  // getProduct(id: any) {
  //   console.log(this.productsList.find(id));
  // }

}
