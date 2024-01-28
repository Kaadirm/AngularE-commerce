// Core
import { Component } from '@angular/core';

// CommonModule
import { CommonModule } from '@angular/common';

// import other components or pages
import { ProductsHeaderComponent } from './components/products-header/products-header.component';

// import for Mat UI
import {MatSidenavModule} from "@angular/material/sidenav"
import { MatIcon } from '@angular/material/icon';


@Component({
  // Html selector
  selector: 'app-home',

  // Component works standalone
  standalone: true,

  // Imports
  imports: [
    CommonModule,
    ProductsHeaderComponent,
    MatSidenavModule,
    MatIcon
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
    // Variable for
  cols = 3;

  // Constructor





  // Methods
    // Method for dynamic icon sidebar open and close
  toggleIcon() {
    this.sideBarIcon = this.sideBarIcon === 'view_headline' ? 'close' : 'view_headline';
  }

  onColumnsCountChange(columnSize: number):void{
    this.cols = columnSize 
  }

}
