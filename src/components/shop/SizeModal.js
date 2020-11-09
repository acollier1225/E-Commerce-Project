import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity } from '../../actions';
import './SizeModal.css';

const SizeModal = (props) => {
    const [selected, selectSize] = useState(null);
    const dispatch = useDispatch();
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const cart = useSelector(state => state.cart)
    let current;

    const changeSize = (size) => {
        selectSize(size);
    }

    const sizeList = sizes.map(size => {
        return <li key={size} onClick={() => changeSize(size)} className={selected === size ? 'square selected' : 'square'} size={size} >{size}</li>
    })

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
            dispatch(addItem(props.name, props.price, props.image, selected, 1));
            selectSize(null);
        }
        current = null;
        {props.onClose()};
    }

    const cancelButton = () => {
        {props.onClose()};
        selectSize(null);
    }

    const selectedButton = () => {
        return (
            <button 
                onClick={() => addToCart()}
            >ADD TO CART</button>
        )
    }

    if( !props.show ) {
        return null;
    } else {
        return (
            <div className="modal">
                <div className="modal-content">
                    Please Select a Size
                    <br />
                    <div id="modal-left-side">
                        {props.name}
                        <br />
                        <img src={props.image}></img>
                    </div>
                    <div id="modal-right-side">
                        ${props.price}.00
                        <br />
                        <ul className="sizes">
                            {sizeList}
                        </ul>
                        <br />
                        <div>
                            {selected ? selectedButton() : <button className="selectSize" onClick={null}>SELECT SIZE</button>}
                        </div>
                        <br />
                        <button onClick={() => cancelButton()}>CANCEL</button>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default SizeModal;