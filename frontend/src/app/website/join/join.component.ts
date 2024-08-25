import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {

  athleteObj: any = {}

  constructor(private apiService: ApiService) {}

  onSave() {
    this.apiService.signUp(this.athleteObj).subscribe((res: any) => {
      if (res) {
        alert(" Thank you for Signing up. You will be emailed with more details.")
      }
    })
  }
}
