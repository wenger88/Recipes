/**
 * Created by goran.pavlovski on 11/16/2016.
 */

var faker = require('faker');

function GenerateRecipes() {

    var recipes = [];

    for (var i = 1; i <= 5; i++){

        var name = faker.lorem.word();
        var description = faker.lorem.paragraph();
        var imageUrl = faker.image.food();
        var likes = Math.floor((Math.random() * 50) + 1);
        var cookingTime = Math.floor((Math.random() * 80) + 1);
        var prepTime = Math.floor((Math.random() * 30) + 1);
        var servings = Math.floor((Math.random() * 4) + 1);
        var random = Math.floor((Math.random() * 10) + 1);
        var ingredients = [];
        var directions = [];

        for (var j = 1; j <= random; j++){
            var ingredientName = faker.lorem.sentence();
            ingredients.push({
                "id": j,
                "name": ingredientName
            })
        }

        random = Math.floor((Math.random() * 10) + 1);

        for (var z = 1; z <= random; z++){
            var directionName = faker.lorem.paragraph();
            directions.push({
                "id": z,
                "name": directionName
            })
        }

        recipes.push({
            "id": i,
            "name": name,
            "description": description,
            "imageUrl": imageUrl,
            "likes": likes,
            "cookingTime": cookingTime,
            "prepTime": prepTime,
            "servings": servings,
            "ingredients": ingredients,
            "directions": directions
        })

    }

    return {"recipes": recipes}
}

module.exports = GenerateRecipes;