
// no general routes
/*
const appRoutes: Routes = [];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
*/

import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {RECIPE_ROUTES} from "./recipes/recipes.routes";

const APP_ROUTES_PROVIDERS: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: RECIPE_ROUTES
    }

];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);