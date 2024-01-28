// Core
import { Component, OnInit } from '@angular/core';

// common module
import { CommonModule } from '@angular/common';

// import for RouterLink
import { RouterLink } from '@angular/router';

// import from other page and modules
import { Cart, CartItem } from '../../models/cart.model';

// import for Material Angular
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIcon,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  // Field
  // Variables
  // cart
  cart: Cart = {
    items: [
      {
      product: "https://via.placeholder.com/150",
      name: "Snackers",
      price: 150,
      quantity: 1,
      id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Snackers",
        price: 150,
        quantity: 1,
        id: 2,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Snackers",
        price: 150,
        quantity: 3,
        id: 3,
      }
    ]
  }
  // datasource
  dataSource: CartItem[] = [];
  // columns
  displayedColumns: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action"
  ];

  // constructor
  constructo() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataSource = this.cart.items
  }

  getTotal(items: Array<CartItem>): number{
    return items
    .map(item => item.price * item.quantity)
    .reduce((acc, item)=> acc + item, 0);
  }

  // methods
}
