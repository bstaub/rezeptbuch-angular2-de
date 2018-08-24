import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Incredient} from '../shared/incredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit, OnChanges {

  @Input() selectedIncredient: Incredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Incredient(form.value.name, form.value.amount);

    if (!this.isAdd) {
      // Bearbeiten
      this.sls.editIncredient( this.selectedIncredient, newIngredient );

    } else {
      // Neu
      this.sls.addIngredient( newIngredient );
    }
    this.onClear(form);


  }

  onClear(form: NgForm) {
    this.cleared.emit(); // an parent compoent bescheid geben..
    form.resetForm();
  }

  ngOnChanges(changes) {  // lifecycle hook OnChanges implementieren
    if (changes.selectedIncredient.currentValue == null) {  // oder ===undefined prüfen, was es am angang ja ist
      this.selectedIncredient = {name: null, amount: null };  // object als welches wir mit [ngModel] binden haben wir so bereits
      this.isAdd = true;
    } else {
      this.isAdd = false; // hier sind wir definiert im Edit Modus
    }
  }

}
