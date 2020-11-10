import React, { useState } from 'react';
import { removeItem, increaseQuantity, decreaseQuantity } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './CartItem.css'
// import Quantity from './Quantity';

const CartItem = (props) => {
    const cart = useSelector(state => state.cart);

    let item = cart.filter(object => object.id === props.id)

    const [count, changeCount] = useState(item[0].quantity);
    const dispatch = useDispatch();

    const decrement = () => {
        if (item[0].quantity > 1) {
            item[0].quantity --;
            changeCount(item[0].quantity)
            dispatch(decreaseQuantity(props.price))
        }
    }

    const increment = () => {
        item[0].quantity++;
        changeCount(item[0].quantity)
        dispatch(increaseQuantity(props.price))
    }

    const remove = () => {
        dispatch(removeItem(props.id, (props.price * item[0].quantity)))
    }

    return ( 
        <div className="cartItem">
            <div className="details">
                <img src={props.image} />
                <span>
                    {props.name}
                    <br />
                    ${props.price}.00
                    <br />
                    <span id={props.type === 'MISC' ? "misc-size" : 'cart-size'}>Size: {props.size}</span>
                    <br />
                    <button onClick={() => decrement()}>-</button>
                        <div id="count">{count}</div>
                    <button onClick={() => increment()}>+</button>
                    {/* <Quantity count={props.count} /> */}
                </span>
            </div>
            <br />
            <button onClick={() => remove()}>REMOVE</button>
        </div>
     );
}
 
export default CartItem;