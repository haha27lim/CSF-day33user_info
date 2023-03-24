import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})                                   
export class UserInfoComponent implements OnInit {

  // Declare a variable for the form
  form!: FormGroup

  // Initialize the FormBuilder dependency in the constructor
  constructor(private fb: FormBuilder) { }

  // Execute the code inside the method once the component is initialized
  ngOnInit(): void {
    // Create a form group and assign it to the 'form' variable
    this.form = this.fb.group({
      // Define form controls with default values
      name: this.fb.control(''),
      address: this.fb.control(''),
    })
  }

}
