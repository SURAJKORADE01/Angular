import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffComponent } from './first/staff/staff.component';
import { AdminComponent } from './second/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StaffComponent,AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}
