import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  userObj: any = {}

  constructor(private apiService: ApiService) {}

  addUser() {
    this.apiService.addNewUser(this.userObj).subscribe((res: any) =>{
      if (res){
        console.log(res)
      } else {
        console.log("Error")
      }
    })
  }


}
