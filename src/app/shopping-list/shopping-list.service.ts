import {Incredient} from '../shared/incredient.model';

export class ShoppingListService {
  private incredients: Incredient[] = [];

  getIngredients() {
    return this.incredients;
  }

  addIncredients(incredients: Incredient[]) {
    Array.prototype.push.apply(this.incredients, incredients);  // auf Klasse this.incrediants anwenden und incredients reinpushen
  }

  addIngredient(ingredient: Incredient) {
    this.incredients.push(ingredient);
  }

  deleteIncredient(incredient: Incredient) {
    this.incredients.splice(this.incredients.indexOf(incredient), 1)
  }

  editIncredient(oldIncredient: Incredient, newIncredient: Incredient) {
    this.incredients[this.incredients.indexOf(oldIncredient)] = newIncredient;
  }


}
