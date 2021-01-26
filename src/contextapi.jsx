import React, {useState,createContext,useEffect} from 'react'
import {v4 as uuidv4} from "uuid"
export const RecipeContext=createContext();
export const RecipeProvider  = (props) => {
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch]=useState("");
  const id="c551c1de";
  const apikey="6d6822bacfe83db8cee2a7e2c0f682c3";
  const getRecipes=async()=>{
    let url =`https://api.edamam.com/search?q=${search}&app_id=${id}&app_key=${apikey}`;
    let response=await fetch(url);
    let data= await response.json();
    let recipes=await data.hits

   let allrecipes= await recipes.map(recipe=>{
     return(
       {
         name:recipe.recipe.label,
         image:recipe.recipe.image,
         price:2*Math.random()*(100),
         calories:recipe.recipe.calories,
        
         id:uuidv4()
       }
     )
   })
 setRecipes(allrecipes)
  }
  useEffect(()=>{
    getRecipes()
  },[search])
  function getquery(item){
  setSearch(item)
  // console.log(item)
}

  return ( 
    <div>
      <RecipeContext.Provider value={{recipes,getquery}}>
        {props.children}
      </RecipeContext.Provider>
    </div>
   );
}
 