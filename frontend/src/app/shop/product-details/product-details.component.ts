import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {}

  
  productID: any
  productData: any = {}
  isEdit: Boolean = false

  ngOnInit(): void {
      this.productID = this.actRoute.snapshot.params['id']
      this.loadProduct(this.productID)
  }

  loadProduct(id: any){
    this.apiService.getProduct(id).subscribe((res: any) => {
      this.productData = res
    })
  }

  onUpdate(){
    this.apiService.editProduct(this.productData._id, this.productData).subscribe((res: any) => {
      if(res) {
        alert("Product updated")
        this.loadProduct(this.productID)
        console.log(res)
      } else {
        alert("Product Not added")
      }
    })
  }

  updateProduct(obj: any) {
    this.productData = obj
    this.openEdit()

  }

  delProduct(id:any) {
    this.apiService.removeProduct(id).subscribe((res: any) => {
      if(res){
        this.loadProduct(this.productID)
        console.log(res)
      }
    })
  }



  openEdit() {
    this.isEdit = true;
  }

  closeEdit(){
    this.isEdit = false
  }

}
