import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Item } from '../models/item.models';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  @Input() childSelectedItem: Item;
  @Output() clickedDone = new EventEmitter();
  done: boolean = false;

  constructor() { }

  finishedEditing() {
    this.done = true;
    this.clickedDone.emit();
  }

}
