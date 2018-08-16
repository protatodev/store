import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { RemoveItemComponent } from './remove-item/remove-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    EditItemComponent,
    ListItemsComponent,
    RemoveItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
