import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenu } from '../../actions';
import Total from '../Total';
import CartItem from './CartItem';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const checkOut = () => {
        dispatch(changeMenu('CHECKOUT'));
    }

    return ( 
        <div>
            {cart.map(item => {
                return (
                    <div key={item.id}>
                        <CartItem 
                            name={item.name} 
                            id={item.id} 
                            price={item.price} 
                            image={item.image} 
                            size={item.size} 
                            type={item.style} />
                    </div>    
                )
            })}
            <Total />
            <button onClick={() => checkOut()} id="check-out">CHECK OUT</button>
        </div>
     );
}
 
export default ShoppingCart;