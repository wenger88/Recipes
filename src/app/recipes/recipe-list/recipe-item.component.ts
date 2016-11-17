/**
 * Created by goran.pavlovski on 11/16/2016.
 */


import {Component, Input} from "@angular/core";
import {IRecipe} from "../interfaces";

@Component({
    selector: 'recipe-item',
    template: require('./recipe-item.component.html'),
    styles: [require('./recipe-item.component.scss')]
})

export class RecipeItemComponent{

    @Input() recipe: IRecipe;
    @Input() recipeId: number;

    constructor(){}

}