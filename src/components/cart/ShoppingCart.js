import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart)

    return ( 
        <div>
            {cart.map(item => {
                return (
                    <div>
                        <CartItem key={item.id} name={item.name} id={item.id} price={item.price} />
                    </div>    
                )
            })}
        </div>
     );
}
 
export default ShoppingCart;