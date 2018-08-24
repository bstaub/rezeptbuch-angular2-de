import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Incredient} from '../shared/incredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit {

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Incredient(form.value.name, form.value.amount);
    this.sls.addIngredient( newIngredient );
  }

}
