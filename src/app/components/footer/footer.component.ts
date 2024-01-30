import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccountLinks } from './AccountLinks';
import { RouterLink } from '@angular/router';
import { QuickLinks } from './QuickLinks';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerMainText: string = `Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt cilisis.`

  quickLinks: QuickLinks[] = [
    {id: 1, link: "#home", text: "About", className: "" },
    {id: 2, link: "#home", text: "Blogs", className: "mt-2" },
    {id: 3, link: "#home", text: "Contact", className: "mt-2" },
    {id: 4, link: "#home", text: "FAQ", className: "mt-2" },
  ]
  
  accountLinks: AccountLinks[] = [
    {id: 1, link: "#home", text: "My Account", className: "" },
    {id: 2, link: "cart", text: "Orders Tracking", className: "mt-2" },
    {id: 3, link: "cart", text: "Checkout", className: "mt-2" },
    {id: 4, link: "#home", text: "Wishlist", className: "mt-2" },
  ]

  //Social Icons
  socialIcons: {
    id: number,
    link: string,
    class: string,
    icon: string
  }[] = [
    {
    id: 1,
    link: "https://www.facebook.com/",
    class: "mr-2 mt-2",
    icon: "fab fa-facebook"
    },
    {
    id: 2,
    link: "https://twitter.com/",
    class: "mr-2 mt-2",
    icon: "fab fa-twitter"
    },
    {
    id: 3,
    link: "https://www.youtube.com/",
    class: "mr-2 mt-2",
    icon: "fab fa-youtube"
    },
    {
    id: 4,
    link: "https://www.instagram.com/",
    class: "mr-2 mt-2",
    icon: "fab fa-instagram"
    },
    {
    id: 5,
    link: "https://www.pinterest.com/",
    class: "mr-2 mt-2",
    icon: "fab fa-pinterest"
    }
  ]

  // methods

  getYear(): number {
    return new Date().getFullYear()
  }

}
