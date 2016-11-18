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
    errorMessage: string;
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

    onSubmit(){
        this.dataService.Update(this.recipe)
            .subscribe((status: boolean) => {
                if (status){
                    this.recipeForm.form.markAsPristine();
                    this.router.navigate(['/recipes', this.recipe.id]);
                    console.log(this.recipeForm);
                }else{
                    this.errorMessage = 'Unable to save customer';
                }
            })
    }

    onCancel(event: Event){
        event.preventDefault();
        this.router.navigate(['/recipes', this.recipe.id]);
    }


    removeDirection(i: number){
        this.recipe.directions.splice(i,1);
        this.recipeForm.form.markAsDirty();
    }

    removeIngredient(i: number){
        this.recipe.ingredients.splice(i,1);
        this.recipeForm.form.markAsDirty();
    }

    addIngredient(name: HTMLInputElement){
        let ingredient: any = {
            'name': name.value,
        }

        if (ingredient.name != ""){
            console.log(ingredient);
            this.recipe.ingredients.push(ingredient);
            name.value = null;
        }else{
            console.log('Empty Fields!');
        }

        console.log(ingredient);

    }

    addDirection(name: HTMLInputElement){
        let direction: any = {
            'name': name.value,
        }

        if (direction.name != ""){
            console.log(direction);
            this.recipe.directions.push(direction);
            name.value = null;
        }else{
            console.log('Empty Fields!');
        }

        console.log(direction);

    }



}