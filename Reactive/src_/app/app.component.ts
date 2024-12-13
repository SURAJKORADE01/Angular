import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})

export class AppComponent 
{
// Inject FormBuilder service
public fbobj = new FormBuilder();

MarvellousForm = this.fbobj.group(
  {
    // Add Multiple validations
    username :['', [Validators.required, Validators.minLength(5),Validators.maxLength(10)] ],
    passowrd : ['',Validators.required],
    ConfirmPass : [''],
    MarvellousClass : this.fbobj.group(
      {
        batch :['Python'],
        fees : ['25000'] 
      }
    )
  }
);

// Method to set FormControl fields through program
SetData()
{
  this.MarvellousForm.setValue(
    {
      username : 'Piyush',
      passowrd : 'abcd',
      ConfirmPass :  'abcd',
      MarvellousClass : 
      {
        batch : 'Python',
        fees : '25000'
      }
    }
  )
}
}
