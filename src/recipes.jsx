import React,{useContext} from 'react';
import {RecipeContext} from "./contextapi";
import RecipeList from './recipeslist';
const Recipes = () => {
    const {recipes}= useContext(RecipeContext);

    return ( 
        <div className="container">
            <div className="row">
            {recipes.map(recipe=>(
            <RecipeList key={recipe.id} recipe={recipe}/>
            ))}
        </div>
        </div>
     );
}
 
export default Recipes;