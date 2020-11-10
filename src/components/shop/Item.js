import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity, changeDetails } from '../../actions';
import SizeModal from './SizeModal';
import './Item.css';
// import { sizes } from '../../constants';

const Item = (props) => {
    const [selected, selectSize] = useState(null);
    const [shown, showModal] = useState(false);
    const cart = useSelector(state => state.cart);
    const details = useSelector(state => state.details);
    const dispatch = useDispatch();
    let current;
    let sizes;

    if (props.type === 'SHOES' && props.style === 'MEN') {
        sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10']
    } else if (props.type === 'SHOES' && props.style === 'WOMEN') {
        sizes = ['5', '5.5', '6', '6.5', '7', '7.5', '8']
    } else if (props.type === 'SHOES') {
        sizes = ['3.5', '4', '4.5', '5', '5.5', '6']
    } else if (props.type === 'MISC') {
        sizes = []
    } else if(props.type === 'PANTS' && props.style === 'WOMEN') {
        sizes = ['0', '1', '2', '3', '4', '5']
    } else if (props.type === 'PANTS' && props.style === 'MEN') {
        sizes = ['28', '29', '30', '31', '32', '33']
    } else if (props.type === 'PANTS' && props.style === 'KIDS') {
        sizes = ['22', '23', '24', '25', '26', '27']
    } else {
        sizes = ['XS', 'S', 'M', 'L', 'XL']
    }

    const changeSize = (size) => {
        selectSize(size);
    }

    const modal = () => {
        showModal(!shown);
    }

    const showDetails = () => {
        dispatch(changeDetails(props.name, props.price, props.image, props.type, props.style));
    }

    const addToCart = () => {
        current = cart.filter(item => item.name === props.name && item.size === selected);
        if (current.length > 0) {
            cart.map(item => {
                if (item.name === props.name && item.size === selected) {
                    dispatch(increaseQuantity(item.price));
                    item.quantity++;
                }
            })
            selectSize(null);
        } else {
            dispatch(addItem(props.name, props.price, props.image, selected, 1, props.type, props.type));
            selectSize(null);
        }  
        current = null;
    }

    const sizeList = sizes.map(size => {
        return <li key={size} onClick={() => changeSize(size)} className={selected === size ? 'square selected' : 'square'} size={size} >{size}</li>
    })

    return ( 
        <div className="list-item">
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
                <button id={props.type === 'MISC' ? 'misc-button' : null}
                    onClick={selected !== null || props.type === 'MISC' ? () => addToCart() : () => modal()}
                >Add to Cart</button>
            </div>
            <SizeModal 
                image={props.image} 
                name={props.name} 
                price={props.price} 
                type={props.type}
                style={props.style}
                onClose={() => modal()} 
                show={shown} 
            />
        </div>
     );
}
 
export default Item;