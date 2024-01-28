// core
import { Component, Output, EventEmitter } from '@angular/core';

// common module
import { CommonModule } from '@angular/common';

// import Mat UI
import {MatCardModule} from "@angular/material/card"
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';




@Component({
  // html selector
  selector: 'app-products-header',

  // Component works standalone
  standalone: true,

  // imports
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],

  // html url
  templateUrl: './products-header.component.html',

  // css, scss url
  styleUrl: './products-header.component.scss'
})
export class ProductsHeaderComponent {
  // Field
  @Output() columnsCountUpdate = new EventEmitter<number>()

  // Variables for filters and icons
  sort:string = "descending" 
  itemsShowCount: number = 12;
  // Constructor

  // Methods
  // Sort to ascending and descending
  onSortUpdate(updatedSort: string):void{
    this.sort = updatedSort;
  }
  // Showsize Methods on the screen
  onItemsShow(itemSize: number):void{
    this.itemsShowCount = itemSize
  }

  onCardsUpdated(colsNum: number):void{
    this.columnsCountUpdate.emit(colsNum)
  }

}
