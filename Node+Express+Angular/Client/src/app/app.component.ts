import { Component } from '@angular/core';
import { OnInit } from '../../node_modules/@angular/core/index';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit
{
  public message : any;

  public constructor(private service : MarvellousService)
  {
    
  }

  // Interface aahe -> This method gets automatically called when the component gets created.
  ngOnInit(): void 
  {
    this.service.getBatches().subscribe(data=>{
      this.message = data;
    });  
  }
}
