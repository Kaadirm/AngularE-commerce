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
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

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
export class CartComponent implements OnInit {
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
  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items
    })
  }

  // methods

  getTotal(items: CartItem[]): number{
    return this.cartService.getTotal(items)
  }

  onClearCart():void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem):void{
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem):void{
    this.cartService.addToCart(item)
  }

  onRemoveQuantity(item: CartItem):void{
    this.cartService.removeQuantity(item)
  }

  onCheckout():void{
    this.http.post("http://localhost:4242/checkout", {
      items: this.cart.items
    }).subscribe(async(res: any) =>{
      let stripe = await loadStripe("pk_test_51Oe3BZIeKu5L5nkENZx6YuNe08tvH6OLxYVw33QQfSR1mo87QJNZA7I83iUDyKnb7bm9jLvsJDwDRFQ0ECZloNkD00g6P98824");
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
