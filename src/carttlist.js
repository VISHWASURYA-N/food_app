import React,{useContext} from 'react'
import {CartContext} from "./cartcontext";

const Cartlist = ({item}) => {
    const {dispatch} = useContext(CartContext);
    return ( 
        <div>
            
            <div className="section">
             <div className="image">
             <img src={item.image} alt="item" className="circle"/>
             </div>
             <div className="contain">
             <h3>NAME:{item.name}</h3>
             <h5>PRICE:{Math.round(item.price)}</h5>
              <button onClick={()=>{dispatch({type:"REMOVE_FROM_CART",id:item.id})}} className="btn btn-danger">REMOVE FROM CART</button>
             </div>
             </div>
             <div>
             
             </div>
             
        
        
        
        
       
            </div>
            
     );
}
 
export default Cartlist;