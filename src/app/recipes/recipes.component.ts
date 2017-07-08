import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model'
import {RecipeService} from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
	providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
	recEl:Recipe;
  constructor(private recpService:RecipeService) { }

  ngOnInit() {
		this.recpService.recipeSelected.subscribe((recipe:Recipe)=>{
			this.recEl=recipe;
		});
  }

}
