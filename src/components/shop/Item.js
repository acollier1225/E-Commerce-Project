import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions';
import './Item.css';

const Item = (props) => {
    const dispatch = useDispatch();

    return ( 
        <div>
            <img src={props.image} />
            <br />
            {props.name} 
            <br />
            ${props.price}.00
            <br />
            <ul className="sizes">
                <li><span>XS</span></li>
                <li><span>S</span></li>
                <li><span>M</span></li>
                <li><span>L</span></li>
                <li><span>XL</span></li>
            </ul>
            <br />
            <button onClick={() => dispatch(addItem(props.name, props.price, props.image))}>Add to Cart</button>
        </div>
     );
}
 
export default Item;