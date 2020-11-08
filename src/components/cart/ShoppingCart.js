import React from 'react';
import { useSelector } from 'react-redux';
import Total from '../Total';
import CartItem from './CartItem';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart)

    return ( 
        <div>
            {cart.map(item => {
                return (
                    <div key={item.id}>
                        <CartItem 
                            name={item.name} id={item.id} price={item.price} image={item.image} size={item.size} count={item.quantity} />
                    </div>    
                )
            })}
            <Total />
            <button id="check-out">CHECK OUT</button>
        </div>
     );
}
 
export default ShoppingCart;