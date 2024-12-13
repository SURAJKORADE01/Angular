import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Reactive form create karnya sathi
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms

// FormBuilder -> Form madhe aasnarya saglyanna ekatra handle karnyasathi hai use krto
// Validators -> Validation karnya sathi

import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]  // used in Services
})

export class AppComponent 
{
// Inject FormBuilder service
// fbobj -> object
public fbobj = new FormBuilder();

// public constructor(private fbobj : FormBuilder)
MarvellousForm = this.fbobj.group(
  {
    // Add Multiple validations
    // Form Controls -> 5 -> username, password, confirmpass, batch, fees
    // saglya form control cha group karaycha hota manun group use kela

    username :['', [Validators.required, Validators.minLength(5),Validators.maxLength(10)] ],
    passowrd : ['',Validators.required],
    ConfirmPass : [''],

    // group madhe group
    MarvellousClass : this.fbobj.group(
      {
        batch :['Python'],    // front-end la data jato
        fees : ['25000'] 
      }
    )
  }
);

// Method to set FormControl fields through program

// button data set kela ki data set karyasathi
  
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