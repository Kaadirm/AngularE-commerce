// CORE
import { Component } from '@angular/core';

// COMMON MODULE
import { CommonModule } from '@angular/common';

// ROUTER
import { RouterOutlet } from '@angular/router';

// imports for material ui angular that we need later
// import {MatButtonModule} from '@angular/material/button';
// MatSidenavModule
// MatGridListModule
// MatMenuModule
// MatButtonModule
// MatCardModule
// MatIconModule
// MatExpansionModule
// MatListModule
// MatToolbarModule
// MatTableModule
// MatBadgeModule
// MatSnackBarModule

@Component({
  // Html Selector
  selector: 'app-root',

  // this component works standalone or not
  standalone: true,

  // import modul
  imports: [CommonModule, RouterOutlet],

  // Html Url or string to write
  templateUrl: './app.component.html',

  // Style Url for scss or css files
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';
  // Field


  // Constructor


  // Methods

}
