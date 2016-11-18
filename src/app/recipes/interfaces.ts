/**
 * Created by goran.pavlovski on 11/16/2016.
 */

export interface IRecipe{
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    likes: number,
    cookingTime: number,
    prepTime: number,
    servings: number,
    ingredients: IIngredients[],
    directions: IDirections[]
}

export interface IIngredients{
    ingredientName: string
}

export interface IDirections{
    directionsName: string
}