import { Component, OnInit, Pipe } from '@angular/core'

import { ApiService } from '../../api.service'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { SearchPipe } from '../../search.pipe'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SearchPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: any = []
  productObj: any = {}
  constructor(private apiService: ApiService) {}
  isAdmin: boolean = false
  searchProduct: any
  searchTerm!: String

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

  search(product: string) {
    this.productList = this.searchProduct.filter((value: any) => 
    value.body.toLowerCase().includes(this.productList))
  }

}
