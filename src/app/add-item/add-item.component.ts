import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item.models';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output() addItem = new EventEmitter();
  name: string = '';
  price: number = 0;
  qty: number = 0;

  constructor() { }

  createNewItem() {
    const newItem = new Item(this.name, this.price, this.qty);
    this.addItem.emit(newItem);

  }

  assignedValues() {
    if(this.name !== '' && this.price !== 0 && this.qty !== 0) {
      return false;
    } else {
      return true;
    }
  }

  resetValues() {
    this.name = '';
    this.price = 0;
    this.qty = 0;
  }

}
