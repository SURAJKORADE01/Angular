import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminComponent,StaffComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
