import { Routes,RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes:Routes=[
	{	path:'', redirectTo:'/signin',pathMatch:'full'}
	 ];

@NgModule({
	imports:[RouterModule.forRoot(appRoutes)],
	exports:[RouterModule]
})

export class AppRoutingModule{
}