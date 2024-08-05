import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {}

  productID: any
  productData: any = {}

  ngOnInit(): void {
      this.productID = this.actRoute.snapshot.params['id']
      this.loadProduct(this.productID)
  }

  loadProduct(id: any){
    this.apiService.getProduct(id).subscribe((res: any) => {
      this.productData = res
    })
  }


}
