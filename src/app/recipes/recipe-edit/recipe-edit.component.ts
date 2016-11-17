/**
 * Created by goran.pavlovski on 11/17/2016.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../../core/services/data.services";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {IRecipe} from "../interfaces";
import {NgForm} from "@angular/forms";
import {ViewChild} from "@angular/core";

@Component({
    selector: 'recipe-edit',
    template: require('./recipe-edit.component.html'),
    styles: [require('./recipe-edit.component.scss')]
})

export class RecipeEditComponent implements OnInit{

    recipe: IRecipe;
    @ViewChild('recipeForm') recipeForm: NgForm;
    constructor(private dataService: DataService,
                private route: ActivatedRoute,
                private router: Router){}


    ngOnInit(){
        this.route.params.subscribe((params: Params) => {
            this.dataService.GetSingle(params['id'])
                .subscribe((recipe: IRecipe) => this.recipe = recipe)
        });
    }

}