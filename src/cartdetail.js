import React,{useContext} from 'react'
import {CartContext} from "./cartcontext";
import Cartlist from './carttlist';
const Cartdetails = () => {
    const {cartitems} = useContext(CartContext);
    let number=cartitems.length
    let total=cartitems.reduce((total,item)=>{
      return(
        total+(item.price)
      )
    },0);
    console.log(total);
    console.log(number)
    if(cartitems.length){
      return ( 
        <div>
        <div className="main"> 
            {cartitems.map(item=>(
               <Cartlist key={item.id} item={item}/> 
            ))}
          </div>
        <div className="maincart">
          <h3>TOTAL ITEMS:{number}</h3>
          <h4>DELIVERY CHARGES:FREE</h4>
          <h4>TOTAL COST:{Math.round(total)}</h4>
          <button className="btn btn-success">CHECKOUT</button>
        </div>



        </div>
        );
    }
    else{
      return(
        <div>
          <h1> CART IS EMPTY PLEASE ADD SOMTHING...!</h1>
        </div>
      )
    }

 
}
 
export default Cartdetails;