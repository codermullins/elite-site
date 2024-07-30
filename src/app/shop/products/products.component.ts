import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../api.service'
import { CommonModule } from '@angular/common'
import { Observable, map } from 'rxjs'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: any = []
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.apiService.getProducts().subscribe((data) => {
      this.productList = data
    })
  }
}
