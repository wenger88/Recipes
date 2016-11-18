/**
 * Created by goran.pavlovski on 11/17/2016.
 */

import {Component, OnInit} from "@angular/core";
import {IRecipe} from "../interfaces";
import {Router, ActivatedRoute} from "@angular/router";
import {DataService} from "../../core/services/data.services";
import 'rxjs/Rx'
import {NgForm} from "@angular/forms";
import {ViewChild} from "@angular/core";

@Component({
    selector: 'recipe-create',
    template: require('./recipe-create.component.html'),
    styles: [require('./recipe-create.component.scss')]
})

export class RecipeCreateComponent implements OnInit{

    recipe = <IRecipe>{
        ingredients:[],
        directions: []
    }

    postMyRecipeToServer:string
    @ViewChild('recipeForm') recipeForm: NgForm;
    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,){}

    ngOnInit(){
    }

    onSubmit(){
        this.dataService.Add(this.recipe)
            .subscribe(
                (data) => {
                    this.postMyRecipeToServer = JSON.stringify(data);
                    this.router.navigate(['/recipes']);
                },
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")
            );
        console.log(this.recipe);
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

    addDirection(directionName: HTMLInputElement){
        let direction: any = {
            'name': directionName.value,
        }

        if (direction.name != ""){
            console.log(direction);
            this.recipe.directions.push(direction);
            directionName.value = null;
        }else{
            console.log('Empty Fields!');
        }

        console.log(direction);

    }

}