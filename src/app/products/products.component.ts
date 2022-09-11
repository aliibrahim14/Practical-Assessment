import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe((data) => {
      this.productsList = data;
    });
  }

}
