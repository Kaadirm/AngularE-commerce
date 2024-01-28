// Core
import { Component } from '@angular/core';

// CommonModule
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from "@angular/material/sidenav"
import { MatIcon } from '@angular/material/icon';


@Component({
  // Html selector
  selector: 'app-home',

  // Component works standalone
  standalone: true,

  // Imports
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIcon
  ],

  // Html url to select
  templateUrl: './home.component.html',

  // Style part
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sideBarIcon = 'view_headline';

  toggleIcon() {
    this.sideBarIcon = this.sideBarIcon === 'view_headline' ? 'close' : 'view_headline';
  }

}
