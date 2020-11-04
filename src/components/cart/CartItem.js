import React from 'react';
import { removeItem } from '../../actions';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const dispatch = useDispatch();

    return ( 
        
        <div onClick={() => dispatch(removeItem(props.id, props.price))}>{props.name}{props.price}</div>
     );
}
 
export default CartItem;