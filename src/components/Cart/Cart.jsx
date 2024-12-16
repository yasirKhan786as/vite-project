import styles from "./Cart.module.css"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

export default function Cart({cartAllProduct, setCartAllProduct}) {
   
    function increment(id){
            setCartAllProduct((prevCart) => 
            prevCart.map((item) => item.id === id ?{...item, counter:item.counter+1} : item))
    }
    function decrement(id){
        
        setCartAllProduct((prevCart) => 
            prevCart.map((item) => item.id === id && item.counter > 1 ?{...item, counter:item.counter-1} : item))
    }
    function handleDelte(id){
        const filteredItem = cartAllProduct.filter((item) => item.id !== id);
        setCartAllProduct(filteredItem)
        toast.success('Removed from Cart Successfully !!');
    }

   
        

    return(
        <>

            <NavLink to="/"><button className={styles.button}>Move To Home</button></NavLink>
            <Toaster />
            {cartAllProduct.length == 0 && (<h1>
                No Products available
            </h1>
            )}
            <div className={styles.cardBox}>
                {cartAllProduct.map((conceptItem) => {  
                     if (conceptItem.id && conceptItem.shirts && conceptItem.counter && conceptItem.description){
                    return(
                        <div className={styles.card}>
                           <div className={styles.card1}>
                             <ul>
                                 <li>
                                    <img src={conceptItem.shirts} alt="" /> 
                                 </li>
                                 <li className={styles.titlePrice}>
                                     <div>Name: {conceptItem.Title}</div>
                                    <div>Price: {conceptItem.price}</div> 
                                    
                                 </li>
                                 <li className={styles.description}>
                                    <p>{conceptItem.description}</p> 
                                 </li>
                                 <li className={styles.counter}>
                                     <p>Select number of Items</p>
                                  <button onClick={() => decrement(conceptItem.id)}>-</button><span>{conceptItem.counter}</span><button onClick={() => increment(conceptItem.id)}>+</button>
                                 </li>
                                 <li><button onClick={() => handleDelte(conceptItem.id)} className={styles.deleteIcon}>&#128465;</button></li>
                             </ul>
                         </div>
                  
                      </div>
                      
                          
                )}
                else{
                 
                }
                })}

            </div>
            
        </>
    )
}

// if (conceptItem.id && conceptItem.shirts && conceptItem.counter && conceptItem.description){
//     <div className={styles.card}>
//      <div className={styles.card1}>
//        <ul>
//            <li>
//               <img src={conceptItem.shirts} alt="" /> 
//            </li>
//            <li className={styles.titlePrice}>
//                <div>Name: {conceptItem.Title}</div>
//               <div>Price: {conceptItem.price}</div> 
              
//            </li>
//            <li className={styles.description}>
//               <p>{conceptItem.description}</p> 
//            </li>
//            <li className={styles.counter}>
//                <p>Select number of Items</p>
//             <button onClick={() => decrement(conceptItem.id)}>-</button><span>{conceptItem.counter}</span><button onClick={() => increment(conceptItem.id)}>+</button>
//            </li>
//            <li><button onClick={() => handleDelte(conceptItem.id)} className={styles.deleteIcon}>&#128465;</button></li>
//        </ul>
//    </div>

// </div>
//        }