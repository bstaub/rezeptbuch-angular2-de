import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  incrediants: Incredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
