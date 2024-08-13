import { Component, OnInit } from '@angular/core'

import { ApiService } from '../../api.service'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: any = []
  productObj: any = {}
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.apiService.getProducts().subscribe((data) => {
      this.productList = data
    })
  }

  onSave() {
    this.apiService.addProduct(this.productObj).subscribe((res: any) => {
      if(res) {
        this.getAllProducts()
        console.log(res)
      } else {
        alert("Product Not added")
      }
    })
  }

  delProduct(id:any) {
    this.apiService.removeProduct(id).subscribe((res: any) => {
      if(res){
        this.getAllProducts()
        console.log(res)
      }
    })
  }

  addToCart(obj: any) {
    this.apiService.addToCart(obj).subscribe((res: any) => {
      console.log(obj)
      if(res){
        alert("added to cart")
      }
    })
  }

  // registerUser(): void {
  //   this.apiService.show<User>(CustomersComponent, {
  //     title: 'Register'
  //   }).result().subscribe(newUser => {
  //     this.users?.push(newUser)
  //   })
  // }
}
