 import {Component} from '@angular/core';
 import {RecipeService} from '../recipes/recipes.service';
 import {ServerService} from '../server.service';
import {Recipe} from '../recipes/recipe.model';
 @Component({
	selector:'app-header',
	templateUrl:'./header.component.html',
	styleUrls:['./header.component.css']
 })

 export class HeaderComponent {
	 recipes=[];
	 constructor(private recSvc:RecipeService,private serverSvc:ServerService){}
	 onSave(){
		 this.recipes=this.recSvc.getRecipes();
		 this.serverSvc.saveRecipes(this.recipes).subscribe(
			 (response)=>console.log(response),
		 (error)=>console.log(error));
	 }
	 
	 onFetch(){
		 this.serverSvc.getRecipes().subscribe(
		 (recipes:Recipe[])=>{
			 this.recipes=recipes;
			 this.recSvc.addRecipes(this.recipes);
		 });
		 
	 }
 }