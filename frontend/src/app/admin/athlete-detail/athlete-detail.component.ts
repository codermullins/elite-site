import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-athlete-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './athlete-detail.component.html',
  styleUrl: './athlete-detail.component.css'
})
export class AthleteDetailComponent implements OnInit {

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {}

  athleteId: any
  athleteData: any = {}
  athleteObj: any = []
  isEdit: Boolean = false

  ngOnInit(): void {
      this.athleteId = this.actRoute.snapshot.params['id']
      this.loadAthlete(this.athleteId)
  }

  loadAthlete(id: any) {
    this.apiService.getAthleteDetail(id).subscribe((res: any) => {
      this.athleteData = res
    })
  }

  editAthlete(obj: any) {
    this.athleteObj = obj
    this.openEdit()
  }

  openEdit() {
    this.isEdit = true
  }

  closeEdit() {
    this.isEdit = false
  }

  onUpdate() {
    this.apiService.updateAthlete(this.athleteObj._id, this.athleteObj).subscribe((res: any) => {
      if(res) {
        alert("Athlete Updated")
        this.loadAthlete(this.athleteId)
      }
      else {
        alert("Error")
      }
    })
  }
}
