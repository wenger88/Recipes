/**
 * Created by goran.pavlovski on 11/16/2016.
 */

import {Component, Input} from "@angular/core";
import {IRecipe} from "../interfaces";

@Component({
    selector: 'recipe-detail',
    template: require('./recipe-detail.component.html'),
    styles: [require('./recipe-detail.component.scss')]
})

export class RecipeDetailComponent{

    @Input() selectedRecipe: IRecipe;

    constructor(){}

}