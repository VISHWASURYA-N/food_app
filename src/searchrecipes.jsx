import React,{useState,useContext} from 'react';
import {RecipeContext} from "./contextapi";
const Searchrecipes = () => {
    const {getquery}= useContext(RecipeContext);
    const [search, setSearch] = useState("");
    function handlesubmit(e){
    e.preventDefault();
    getquery(search);
    setSearch("")
    }
    return (  
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="search for food" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <button>search</button>
            </form>

        </div>
    );
}
 
export default Searchrecipes;

