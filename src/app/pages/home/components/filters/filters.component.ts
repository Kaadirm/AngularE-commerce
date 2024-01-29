// imports
  // core
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

// common module
import { CommonModule } from '@angular/common';

// material angular
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectionList } from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { StoreService } from '../../../../services/store.service';
import { Subscription } from 'rxjs';

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
export class FiltersComponent implements OnInit, OnDestroy {
  // Field
  @Output() showCategory = new EventEmitter<string>();

  // Variables
  categoriesSubscription: Subscription | undefined;
  categories:string[] | undefined;

  // Constructor
  constructor(private storeService: StoreService){}
  
  // Methods
  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories()
    .subscribe(response => {
      this.categories = response;
    });
  }

  onShowCategory(category :string):void{
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe()
    }
  }
}
