import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http:44.203.196.245:4000'

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
