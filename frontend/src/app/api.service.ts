import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://44.203.196.245/:4000/getProducts'

  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get(this.apiUrl)
  }
}
