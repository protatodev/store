import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item.models';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  @Input() childItemsList: Item[];
  @Output() clickSender = new EventEmitter();

  constructor() { }

  editButtonClicked(item: Item) {
    this.clickSender.emit(item);
  }

}
