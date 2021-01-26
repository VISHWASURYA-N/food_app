import React,{useContext} from 'react'
import {CartContext} from "./cartcontext";

const RecipeList = ({recipe}) => {
    const {dispatch} = useContext(CartContext);
    return (
       <div className="card col-lg-5 m-1" >
        <img src={recipe.image} alt="food" className="card-img-top img-fluid img-border-rounded-circle"/>
        <div className="card-body">
        <div className="card-title h3"> NAME:{recipe.name}</div>
        <div className="card-subtitle h4">CALORIES:{Math.round(recipe.calories)}</div>
        <div className="card-subtitle h4"> PRICE:{Math.round(recipe.price)} RS</div>
        <button onClick={()=>{dispatch({type:"ADD_TO_CART",payload:{name:recipe.name,price:recipe.price,image:recipe.image,id:recipe.id , calories:recipe.calories}})}} className="btn btn-success btn-block">ADD TO CART</button>
        </div>

       </div>

     
      );
}
 
export default RecipeList;
