import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  orderObj: any = []

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getOrder()
  }

  getOrder() {
    this.apiService.getOrder(this.orderObj).subscribe((res) => {
      console.log(res)
      this.orderObj = res
      
    })
  }

}
