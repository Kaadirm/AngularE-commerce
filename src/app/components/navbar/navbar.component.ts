import { Component } from '@angular/core';
import { NavBarMenu } from './NavBarMenu';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  CommonModule,
  RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // field

  navBarMenu: NavBarMenu[] = [
    {id: 1, link: "#home", text: "Home", className: "mr-2  hover:underline", isPopUp: false},
    {id: 2, link: "#home", text: "Women’s", className: "mr-2  hover:underline", isPopUp: false },
    {id: 3, link: "#home", text: "Men’s", className: "mr-2  hover:underline", isPopUp: false },
    {id: 4, link: "#home", text: "Shop", className: "mr-2  hover:underline", isPopUp: false },
    {id: 5, link: "#home", text: "Pages", className: "mr-2  hover:underline", isPopUp: false,
    popUpMenu: [
      {id: 101 ,link: "#home", text: "Product Details", className: " bg-white text-gray-800 p-2 mt-2 space-y-2 rounded-md shadow-lg hover:block"},
      {id: 102 ,link: "cart", text: "Shop Cart", className: " bg-white text-gray-800 p-2 mt-2 space-y-2 rounded-md shadow-lg hover:block"},
      {id: 103 ,link: "cart", text: "Checkout", className: " bg-white text-gray-800 p-2 mt-2 space-y-2 rounded-md shadow-lg hover:block"},
      {id: 104 ,link: "#home", text: "Blog Details", className: " bg-white text-gray-800 p-2 mt-2 space-y-2 rounded-md shadow-lg hover:block"},
      ]
    },
    {id: 6, link: "#home", text: "Blog", className: "mr-2  hover:underline", isPopUp: false, },
    {id: 7, link: "#home", text: "Contact", className: " hover:underline", isPopUp: false },
  ]
  
  // constructor
  constructor(){}


  // methods

}
