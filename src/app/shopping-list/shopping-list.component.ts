import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Incredient[] = [];
  selectedIncredient: Incredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onSelectItem(incredient: Incredient) {
    this.selectedIncredient = incredient;
  }

  onCleared() {
    this.selectedIncredient = null;
  }

}
