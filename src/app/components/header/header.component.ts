// CORE
import { Component, Input } from '@angular/core';

// Component and Pages
import { NavbarComponent } from '../navbar/navbar.component';

// Router
import { RouterLink } from '@angular/router';

// Common
import { CommonModule } from '@angular/common';

// Models
import { Cart, CartItem } from '../../models/cart.model';

// Service
import { CartService } from '../../services/cart.service';


// Material imports
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu"


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    MatToolbarModule,
    MatIconModule,
    MatBadge,
    MatMenuModule,
    RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // field
  private _cart: Cart = {items: []};
  itemsQuantity = 0;

  @Input()
  get cart(): Cart{
    return this._cart;
  }

  set cart(cart: Cart){
    this._cart = cart;

    this.itemsQuantity = cart.items
    .map(item => item.quantity)
    .reduce((acc, item) => acc + item, 0);
  }

  // constructor
  constructor(private cartService: CartService){}

  // methods
  getTotal(items: CartItem[]): number{
    return this.cartService.getTotal(items)
  }

  onClearCart(){
    this.cartService.clearCart();
  }
}
