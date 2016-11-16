import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from "../../recipes/recipes.component";

const appHeaderRoutes: Routes = [
	{
		path: 'recipes',
		component: RecipesComponent
	},
	{
		path: '',
		redirectTo: '/recipes',
		pathMatch: 'full'
	}
];

export const appHeaderRouting: ModuleWithProviders = RouterModule.forChild(appHeaderRoutes);