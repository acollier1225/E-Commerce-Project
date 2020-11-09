import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity, changeDetails } from '../../actions';
import SizeModal from './SizeModal';
import './Item.css';

const Item = (props) => {
    const [selected, selectSize] = useState(null);
    const [shown, showModal] = useState(false);
    const cart = useSelector(state => state.cart);
    const details = useSelector(state => state.details);
    const dispatch = useDispatch();
    let current;

    const changeSize = (size) => {
        selectSize(size);
    }

    const modal = () => {
        showModal(!shown);
    }

    const showDetails = () => {
        dispatch(changeDetails(props.name, props.price, props.image));
    }

    const addToCart = () => {
        current = cart.filter(item => item.name === props.name && item.size === selected);
        console.log(current)
        if (current.length > 0) {
            cart.map(item => {
                if (item.name === props.name && item.size === selected) {
                    dispatch(increaseQuantity(item.price));
                    item.quantity++;
                }
            })
            selectSize(null);
            
        } else {
            dispatch(addItem(props.name, props.price, props.image, selected, 1));
            selectSize(null);
        }  
        current = null;
    }

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const sizeList = sizes.map(size => {
        return <li key={size} onClick={() => changeSize(size)} className={selected === size ? 'square selected' : 'square'} size={size} >{size}</li>
    })

    return ( 
        <div>
            <img className="link" onClick={() => showDetails()} src={props.image} />
            <br />
            <span className="link" onClick={() => showDetails()}>{props.name}</span> 
            <br />
            ${props.price}.00
            <br />
            <div>
                <ul className="sizes">
                    {sizeList}
                </ul>
                <br />
                <button 
                    onClick={selected !== null ? () => addToCart() : () => modal()}
                >Add to Cart</button>
            </div>
            <SizeModal 
                image={props.image} 
                name={props.name} 
                price={props.price} 
                onClose={() => modal()} show={shown} 
            />
        </div>
     );
}
 
export default Item;