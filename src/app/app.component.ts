import { Component } from '@angular/core';
import { Item } from './models/item.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem: Item;
  masterItemsList: Item[] = [];

  createItem(item: Item) {
    this.masterItemsList.push(item);
  }

  finishedEditing() {
    this.selectedItem = null;
  }

  editItem(clickedItem: Item) {
    this.selectedItem = clickedItem;
  }
}
