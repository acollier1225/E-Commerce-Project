import React from 'react';
import { removeItem } from '../../actions';
import { useDispatch } from 'react-redux';
import './CartItem.css'

const CartItem = (props) => {
    const dispatch = useDispatch();

    return ( 
        <div className="cartItem">
            <div className="details">
                <img src={props.image} />
                <span>
                    {props.name}
                    <br />
                    {props.size}
                    <br />
                    ${props.price}.00
                    <br />
                </span>
            </div>
            <br />
            <button onClick={() => dispatch(removeItem(props.id, props.price))}>REMOVE</button>
        </div>
     );
}
 
export default CartItem;