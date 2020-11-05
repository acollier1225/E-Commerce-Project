import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions';
import SizeModal from './SizeModal';
import './Item.css';

const Item = (props) => {
    const [selected, selectSize] = useState(null);
    const [shown, showModal] = useState(false);
    const dispatch = useDispatch();

    const changeSize = (size) => {
        selectSize(size);
    }

    const modal = () => {
        showModal(!shown);
    }

    const addToCart = () => {
        dispatch(addItem(props.name, props.price, props.image, selected));
        selectSize(null);
    }

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const sizeList = sizes.map(size => {
        return <li key={size} onClick={() => changeSize(size)} className={selected === size ? 'square selected' : 'square'} size={size} >{size}</li>
    })

    return ( 
        <div>
            <img src={props.image} />
            <br />
            {props.name} 
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