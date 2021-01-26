import React, { createContext, useReducer } from 'react';
import {toast ,Zoom,Bounce} from "react-toastify";
export let CartContext=createContext();

export const CartProvider = (props) => {
function reducer(cartitems,action){
    switch(action.type){
    case "ADD_TO_CART":
      let check=  cartitems.find(item=>(item.id===action.payload.id))
       if(check){
           return(
        // toast("item already added to cart",{
        //     type:"error",
        //     position:toast.POSITION.BOTTOM_LEFT
        // }),
        alert("item is already in the cart"),
           
        cartitems
           )}
       else{
           return(
 [...cartitems,{name:action.payload.name,price:action.payload.price,image:action.payload.image,id:action.payload.id}]
           )
     
       }
    
    case "REMOVE_FROM_CART":return(
        cartitems.filter(item=>(
            item.id!==action.id
        ))
    )
    default:return(
        cartitems
    )


    }
}



    let [cartitems,dispatch]=useReducer(reducer,[])
    return (
        <div>
            <CartContext.Provider value={{dispatch,cartitems}}>
                {props.children}
            </CartContext.Provider>
        </div>
      );
}
 
 