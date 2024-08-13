import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  cartObj: any = []

  ngOnInit(): void {
      this.loadCart()
  }

  loadCart(){
    this.apiService.getCart(this.cartObj).subscribe((res) => {
      this.cartObj = res
    })
  }

  deleteItem(id: any){
    console.log(id)
    this.apiService.deleteCartItem(id).subscribe((res) => {
      if(res){
        this.loadCart()
      }
    })
  }

  checkout(obj: any){
    this.apiService.postOrder(obj).subscribe((res) => {
      if (res) {
        console.log(obj)
      }
    })
  }

}
