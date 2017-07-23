import { Routes,RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes:Routes=[
	{	path:'', redirectTo:'/signin',pathMatch:'full'},
	{	path:'recipes',component:RecipesComponent,canActivate:[AuthGuard],children:[
		{path:'',component:RecipeStartComponent},
		{path:'new',component:RecipeEditComponent,canActivate:[AuthGuard]},
		{path:':id',component:RecipeDetailComponent},
		{path:':id/edit',component:RecipeEditComponent, canActivate:[AuthGuard]},
	]},
	{	path:'shopping-list',component:ShoppingListComponent,canActivate:[AuthGuard]},
	{	path:'signup',component:SignupComponent},
	{	path:'signin',component:SigninComponent},
	 ];

@NgModule({
	imports:[RouterModule.forRoot(appRoutes)],
	exports:[RouterModule]
})

export class AppRoutingModule{
}