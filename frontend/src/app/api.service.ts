import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://ec2-34-207-57-25.compute-1.amazonaws.com:4000'

  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get(this.apiUrl + "/products")
  }

  getProduct(id: any) {
    return this.http.get(this.apiUrl + `/products/getProduct/${id}`)
  }

  addProduct(obj: any) {
    return this.http.post(this.apiUrl + "/products/addProduct/", obj)
  }

  removeProduct(id: any) {
    return this.http.delete(this.apiUrl + `/products/delete/${id}`)
  }
}
