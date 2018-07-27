import {Incredient} from '../shared/incredient.model';

export class ShoppingListService {
  private incredients: Incredient[] = [];

  getIngredients() {
    return this.incredients;
  }

  addIncredients(incredients: Incredient[]) {
    Array.prototype.push.apply(this.incredients, incredients);  // auf Klasse this.incrediants anwenden und incredients reinpushen
  }
}
