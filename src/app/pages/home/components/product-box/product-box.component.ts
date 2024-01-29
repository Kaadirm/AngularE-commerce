// Core
import { Component, Input, EventEmitter, Output } from '@angular/core';

// common module
import { CommonModule } from '@angular/common';

// import models
import { ProductModel } from '../../../../models/product.model';

// import Material Angular
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { HomeComponent } from '../../home.component';


@Component({
  // html selector
  selector: 'app-product-box',

  // component works standalone
  standalone: true,

  // imports 
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    HomeComponent
  ],

  // html url
  templateUrl: './product-box.component.html',

  // style url
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent {
  // field
  @Input() fullWidthMode = false;
  @Input () product: ProductModel | undefined 
  // constructor

  @Output() addToCart = new EventEmitter()

  // methods
  onAddToCart():void{
    this.addToCart.emit(this.product)
  }
}
