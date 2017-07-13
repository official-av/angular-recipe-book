import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{
	constructor(private shopListService:ShoppingListService){
		
	}
	
	addToShopList(ingrArr:ingredient[]){
		this.shopListService.addIngredients(ingrArr);
	}
	
	private recipes:Recipe[]=
	[
		new Recipe('Hot Dog',
							 'This is a Hot Dog',
							 'http://www.diariodf.mx/wp-content/uploads/2015/06/hot-dog-and-slab-pie-019.jpg',
								[
									new ingredient('buns',2),
									new ingredient('sausage',1),
									new ingredient('toppings',4)
								]
							),
		new Recipe('Not Hot Dog',
							 'This is not a Hot Dog',
							 'http://media.istockphoto.com/photos/supreme-pizza-slice-lift-picture-id153784617?k=6&m=153784617&s=612x612&w=0&h=dYsMeY0ps3uiG9kq1aR7VowCqfrQaZM-XHBVYg8siNk=',
								[
									new ingredient('pizza base',1),
									new ingredient('onions',2),
									new ingredient('toppings',4)
								]
							)
	];
	
	getRecipes(){
		return this.recipes.slice();
		//slice used to provide a copy of the array not the exact one
	}
	
	getRecipeDetails(id:number){
		return this.recipes[id];
	}
}