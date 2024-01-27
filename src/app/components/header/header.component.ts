// CORE
import { Component } from '@angular/core';

// Router
import { RouterLink } from '@angular/router';

// Common
import { CommonModule } from '@angular/common';

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
    MatToolbarModule,
    MatIconModule,
    MatBadge,
    MatMenuModule,
    RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
