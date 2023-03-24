import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  form!: FormGroup
  items!: FormArray

  // Initialize the FormBuilder dependency in the constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // create a new FormArray to store the items
    this.items = this.fb.array([])

    // create a new FormGroup and set the 'items' property to the FormArray
    this.form = this.fb.group({
      items: this.items
    })
  }

  // function to add a new item to the cart
  addToCart() {
    // create a new FormGroup representing the item and add it to the FormArray
    this.items.push(this.createItem())
  }

  // function to create a new FormGroup representing an item
  createItem() {
    return this.fb.group({
      item: this.fb.control<string>(''), // create a FormControl for the item name
      quantity: this.fb.control<number>(1) // create a FormControl for the item quantity
    })
  }

  ngAfterViewInit(): void {
  }

}
