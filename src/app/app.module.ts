import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing} from './app.routing';

import { AppComponent }   from './app.component';

import { SharedModule } from './shared';
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {DataService} from "./core/services/data.services";
import {RecipeStartComponent} from "./recipes/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeCreateComponent} from "./recipes/recipe-create/recipe-create.component";

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		BrowserModule,		
		SharedModule,
        routing
	],
	declarations: [
		AppComponent,
		RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeCreateComponent

	],
	providers: [
		DataService
	], 
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}
