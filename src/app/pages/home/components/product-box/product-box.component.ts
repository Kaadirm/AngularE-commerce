// Core
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// import Material Angular
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  // html selector
  selector: 'app-product-box',

  // component works standalone
  standalone: true,

  // imports 
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon
  ],

  // html url
  templateUrl: './product-box.component.html',

  // style url
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent {
  // field
  @Input() fullWidthMode = false;
  
  // constructor

  // methods
}
