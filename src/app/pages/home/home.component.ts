// Core
import { Component, OnDestroy, OnInit } from '@angular/core';

// CommonModule
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// services
import { CartService } from '../../services/cart.service';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';

// import other components or pages
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { ProductModel } from '../../models/product.model';


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
    HttpClientModule,
    ProductsHeaderComponent,
    FiltersComponent,
    MatSidenavModule,
    MatIcon,
    MatGridListModule,
    ProductBoxComponent,
  ],

  // Html url to select
  templateUrl: './home.component.html',

  // Style part
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Field

    // Variable for dynamic icon sidebar open and close
  sideBarIcon = 'view_headline';
    // Variable for column size
  cols:number = 3;
    // Variable for rowHeight
  rowHeight:number = ROWS_HEIGHT[this.cols]
    // Variable for dynamic category if it is selected or not selected (undefined)
  category: string | undefined;
    // Variable for store the data from API
  products: ProductModel[] | undefined
  
  sort:string = "desc";
  count:string = "12";
  productsSubscription: Subscription | undefined


  // Constructor
  constructor(private cartService: CartService, private storeService: StoreService ){}

  
  
  // Methods

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort)
    .subscribe(_products => {
      this.products = _products;
    })
  }

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

  // adding cart method with data from child component
  onAddtoCart(product: ProductModel):void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

  onItemsCountUpdate(newCount: number):void{
    this.count = newCount.toString();
    this.getProducts()
  }

  onSortUpdate(newSort: string):void{
    this.sort = newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    if(this.productsSubscription){
      this.productsSubscription.unsubscribe();
    }
  }
}
