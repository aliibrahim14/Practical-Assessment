import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: any[] = [];
  products: any[] = []
  userId: any;
  orderId: any;
  userDetails: any[] = [];

  constructor ( private api: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe((data: any) => {
      this.orderId= data.id;
    });
  }

  ngOnInit(): void {
    this.api.getOrderDetails(this.orderId).subscribe((data) => {
      this.orderDetails = data;
      this.products = data[0].Products
      this.api.getUserDetails(data[0].UserId).subscribe((data) => {
        this.userDetails = data;
      });
    });
  }
}
