import { Component, OnInit } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'elite-site'
}
