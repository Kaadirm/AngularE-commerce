// Core
import { Component, Input, EventEmitter, Output } from '@angular/core';

// common module
import { CommonModule } from '@angular/common';

// import models
import { ProductModel } from '../../../../models/product.model';

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
  product: ProductModel | undefined = {
    id: 1,
    title: "Sneakers",
    price: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150"
  }
  // constructor

  @Output() addToCart = new EventEmitter()

  // methods
  onAddToCart():void{
    this.addToCart.emit(this.product)
  }
}
