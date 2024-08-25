import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.css'
})
export class AthletesComponent implements OnInit {

athleteList: any = []

constructor(private apiService: ApiService) {}

ngOnInit(): void {
    this.getAthletes()
}


getAthletes() {
  this.apiService.getAthlete().subscribe((res) => {
    this.athleteList = res
  })
}

deleteAthlete(id: any) {
  this.apiService.deleteAthlete(id).subscribe((res: any) => {
    if(res){
      this.getAthletes()
      console.log(res)
    }
  })
}

}
