import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://ec2-34-207-57-25.compute-1.amazonaws.com:4000'
  // private apiUrl = 'http://localhost:4000'
  constructor(private http: HttpClient) {}

  /**block for Product page api calls */
  getProducts() {
    return this.http.get(this.apiUrl + "/products")
  }

  getProduct(id: any) {
    return this.http.get(this.apiUrl + `/products/getProduct/${id}`)
  }

  addProduct(obj: any) {
    return this.http.post(this.apiUrl + "/products/addProduct/", obj)
  }

  editProduct(id: any, obj: any){
    return this.http.put(this.apiUrl + `/products/update/${id}`, obj)
  }

  removeProduct(id: any) {
    return this.http.delete(this.apiUrl + `/products/delete/${id}`)
  }

  /** block for cart api calls */
  addToCart(obj: any) {
    return this.http.post(this.apiUrl + "/products/addtocart", obj )
  }

  getCart(obj: any) {
    return this.http.get(this.apiUrl + '/products/getCart', obj)
  }

  deleteCartItem(obj: any) {
    return this.http.post(this.apiUrl + '/products/removeFromCart', obj)
  }

  /**block for user api */
  addNewUser(obj: any) {
    return this.http.post(this.apiUrl + "/users/signup", obj)
  }

  getUser(obj: any) {
    return this.http.post(this.apiUrl + "/users/login", obj)
  }

  getAllUsers() {
    return this.http.get(this.apiUrl + '/users')
  }

  /**Block for Order List calls */
  postOrder(obj: any){
    return this.http.post(this.apiUrl + '/products/addToOrder', obj)
  }

  getOrder(obj: any){
    return this.http.get(this.apiUrl + "/products/getOrder", obj)
  }
}
