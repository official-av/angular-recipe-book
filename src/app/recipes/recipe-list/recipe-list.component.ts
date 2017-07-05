import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[]=[
		new Recipe('A Test Recipe','Random recipe','http://img.sndimg.com/food/image/upload/h_465,w_620,c_fit/v1/img/recipes/14/21/56/7bRqI0ARdiElWXannur9_Mexican-Wrapped-Hot-Dog-4.png'),new Recipe('Not Hot Dog','see it isnt','yadyada')
	];
  constructor() { }

  ngOnInit() {
  }
//	addRecipe(a,b,c){
//		this.recipes.push(new Recipe(a,b,c));
//	}

}
