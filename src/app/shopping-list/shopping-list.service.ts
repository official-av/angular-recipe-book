import {EventEmitter} from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	addIngredient=new EventEmitter<ingredient>();
	ingredientsChanged=new EventEmitter<ingredient[]>();
	private ingredients:ingredient[]=[new ingredient('Apples',5),new ingredient('Tomatoes',10)];
	
	 getIngArr() {
		return this.ingredients.slice();
	 }
	
	addIngredients(ingrArr:ingredient[]){
		this.ingredients.push(...ingrArr);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}