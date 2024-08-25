import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
eventList: any = []
eventObj: any = {}
isAdmin = true
isEdit = false

constructor(private apiService: ApiService) {}

ngOnInit(): void {
    this.getAllEvents()

}

getAllEvents() {
  this.apiService.getAllEvent().subscribe((data) => {
    this.eventList = data
  })
}

onSave(){
  this.apiService.addEvent(this.eventObj).subscribe((res: any) => {
    console.log(res)
      this.getAllEvents()
      

  })
}

onDelete(id: any) {
  this.apiService.removeEvent(id).subscribe((res: any) => {
    if(res){
      this.getAllEvents()
      console.log("Event Deleted")
    }
  })
}

onUpdate(){
  this.apiService.editEvent(this.eventObj._id, this.eventObj).subscribe((res: any) => {
    if(res) {
      this.getAllEvents()
      this.isEdit = false
      console.log(res)
    } else {
      alert("Product Not added")
    }
  })
}

loadEvent(id: any) {
  this.apiService.getEvent(id).subscribe((res: any) => {
    this.isEdit = true
    this.eventObj = res
  })
}

}
