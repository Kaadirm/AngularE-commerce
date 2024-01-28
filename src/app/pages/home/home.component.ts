// Core
import { Component } from '@angular/core';

// CommonModule
import { CommonModule } from '@angular/common';

// import other components or pages
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';

// import for Mat UI
import {MatSidenavModule} from "@angular/material/sidenav"
import { MatIcon } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

// Object for changeable height for columns
const ROWS_HEIGHT: {
  [id: number]: number
} = {
  1: 400,
  3: 335,
  4: 350
}


@Component({
  // Html selector
  selector: 'app-home',

  // Component works standalone
  standalone: true,

  // Imports
  imports: [
    CommonModule,
    ProductsHeaderComponent,
    FiltersComponent,
    MatSidenavModule,
    MatIcon,
    MatGridListModule,
  ],

  // Html url to select
  templateUrl: './home.component.html',

  // Style part
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Field

    // Variable for dynamic icon sidebar open and close
  sideBarIcon = 'view_headline';
    // Variable for column size
  cols:number = 3;
    // Variable for rowHeight
  rowHeight:number = ROWS_HEIGHT[this.cols]
  // Variable for dynamic category if it is selected or not selected (undefined)
  category: string | undefined;

  // Constructor





  // Methods
    // Method for dynamic icon sidebar open and close
  toggleIcon() {
    this.sideBarIcon = this.sideBarIcon === 'view_headline' ? 'close' : 'view_headline';
  }

    // Method for column size
  onColumnsCountChange(columnSize: number):void{
    this.cols = columnSize 
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }


    // Method for category changing value from filters
  onShowCategory(newCategory: string):void{
    this.category = newCategory
  }


}
