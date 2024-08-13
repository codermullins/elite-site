import { ApiService } from '../../api.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private apiService: ApiService) {}

  userObj: any = {}
  
  getUser() {
    this.apiService.getUser(this.userObj).subscribe((res: any) =>{
      if (res){
        console.log(res)
      } else {
        console.log("Error")
      }
    })
  }
}
