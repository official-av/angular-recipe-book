import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	@Input('recDet') recipeDetails:Recipe;
  constructor(private recpService:RecipeService) { }

  ngOnInit() {
  }

	addToList(){
		this.recpService.addToShopList(this.recipeDetails.ingredients);
	}
}
