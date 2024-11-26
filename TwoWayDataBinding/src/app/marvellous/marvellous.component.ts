import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})

export class MarvellousComponent {
  public Name : string = "Marvellous Infosystems Pune";

  public Data : string = "";
}
