// imports
  // core
import { Component, EventEmitter, Output } from '@angular/core';

// common module
import { CommonModule } from '@angular/common';

// material angular
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectionList } from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  // html selector
  selector: 'app-filters',

  // component works standalone
  standalone: true,

  // imports 
  imports: [
    CommonModule,
    MatExpansionModule,
    MatSelectionList,
    MatListModule,
    MatButtonModule,
  ],

  // html url
  templateUrl: './filters.component.html',

  // style url
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  // Field
  @Output() showCategory = new EventEmitter<string>();

  // Variables
  
  Categories:string[] = ["shoes", "sports", "shorts"];

  // Constructor

  // Methods

  onShowCategory(category :string):void{
    this.showCategory.emit(category)
  }

}
