import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions'

const Item = (props) => {
    const dispatch = useDispatch();

    return ( 
        <div>
            {props.name} <button onClick={() => dispatch(addItem(props.name, props.price))}>Add to Cart</button>
            <br />
            {props.price}
        </div>
     );
}
 
export default Item;