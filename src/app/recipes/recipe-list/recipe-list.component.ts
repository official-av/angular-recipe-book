import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[];
  constructor(private recpService:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
		this.recipes=this.recpService.getRecipes();
  }
	
	onNewRecipe(){
		this.router.navigate(['new'],{relativeTo:this.route});
	}
}
