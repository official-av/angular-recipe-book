import { ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService{
	ingredientsChanged=new Subject<ingredient[]>();
	addIngredient=new Subject<ingredient>();
	private ingredients:ingredient[]=[new ingredient('Apples',5),new ingredient('Tomatoes',10)];
	
	 getIngArr() {
		return this.ingredients.slice();
	 }
	
	
//	addIngredient(ingr:ingredient){
//		this.ingredients.push(ingr);
//		this.ingredientsChanged.next(this.ingredients.slice());
//	}
	
	addIngredients(ingrArr:ingredient[]){
		this.ingredients.push(...ingrArr);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}