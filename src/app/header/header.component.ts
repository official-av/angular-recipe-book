 import {Component} from '@angular/core';
 import {RecipeService} from '../recipes/recipes.service';
 import {ServerService} from '../server.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';

 @Component({
	selector:'app-header',
	templateUrl:'./header.component.html',
	styleUrls:['./header.component.css']
 })

 export class HeaderComponent {
	 recipes=[];
	 
	loggedIn=this.authSvc.isAuthenticated();
	 constructor(private recSvc:RecipeService,private serverSvc:ServerService,private authSvc:AuthService,private router:Router){}
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
	 
	 onLogout(){
		 this.authSvc.logout();
	 }
 }