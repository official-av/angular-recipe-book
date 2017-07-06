import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[]=[
		new Recipe('Hot Dog','This is a HotDog','http://img.sndimg.com/food/image/upload/h_465,w_620,c_fit/v1/img/recipes/14/21/56/7bRqI0ARdiElWXannur9_Mexican-Wrapped-Hot-Dog-4.png'),new Recipe('Not Hot Dog','This is not a HotDog','http://media.istockphoto.com/photos/supreme-pizza-slice-lift-picture-id153784617?k=6&m=153784617&s=612x612&w=0&h=dYsMeY0ps3uiG9kq1aR7VowCqfrQaZM-XHBVYg8siNk=')
	];
	@Output() fireRecipe=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
//	addRecipe(a,b,c){
//		this.recipes.push(new Recipe(a,b,c));
//	}
	onRecipeSelected(item:Recipe){
		this.fireRecipe.emit(item);
	}
	
}
