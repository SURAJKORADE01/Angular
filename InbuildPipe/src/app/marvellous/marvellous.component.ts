import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})

export class MarvellousComponent 
{
  public str : string = "Marvellous Infostems";

  public fValue : number = 123.456789;

  public Book = {
    "Name" : "C Programming",
    "Author" : "Ajay Mitthal",
    "Rs." : "450"
  }

  public Today = new Date();
  
}