import React, { useState } from 'react';
import { removeItem, increaseQuantity, decreaseQuantity } from '../../actions';
import { useDispatch } from 'react-redux';
import './CartItem.css'

const CartItem = (props) => {
    const [count, changeCount] = useState(props.count);
    const dispatch = useDispatch();

    const decrement = () => {
        if (count > 1) {
            changeCount(count - 1)
            dispatch(decreaseQuantity(props.price))
        }
    }

    const increment = () => {
        changeCount(count + 1)
        dispatch(increaseQuantity(props.price))
    }

    const remove = () => {
        dispatch(removeItem(props.id, (props.price * count)))
    }

    return ( 
        <div className="cartItem">
            <div className="details">
                <img src={props.image} />
                <span>
                    {props.name}
                    <br />
                    Size: {props.size}
                    <br />
                    ${props.price}.00
                    <br />
                    <button onClick={() => decrement()}>-</button>
                        <div id="count">{count}</div>
                    <button onClick={() => increment()}>+</button>
                </span>
            </div>
            <br />
            <button onClick={() => remove()}>REMOVE</button>
        </div>
     );
}
 
export default CartItem;