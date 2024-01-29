// CORE
import { Component, OnInit } from '@angular/core';

// COMMON MODULE
import { CommonModule } from '@angular/common';

// ROUTER
import { RouterOutlet } from '@angular/router';

// import Components
import { HeaderComponent } from './components/header/header.component';

// models
import { Cart } from './models/cart.model';

// services
import { CartService } from './services/cart.service';


@Component({
  // Html Selector
  selector: 'app-root',

  // this component works standalone or not
  standalone: true,

  // import modul
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent
  ],

  // Html Url or string to write
  templateUrl: './app.component.html',

  // Style Url for scss or css files
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // Field
  cart: Cart = { items: []};

  // Constructor
  constructor(private cartService: CartService){}

  // Methods
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }
}
