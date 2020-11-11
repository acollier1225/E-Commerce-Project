import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity, removeFromWishlist } from '../../actions';
import './SizeModal.css';

const SizeModal = (props) => {
    const [selected, selectSize] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const wishlist = useSelector(state => state.wishlist);
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
        let currentId = wishlist.filter(item => item.name === props.name )
            if (currentId.length > 0) {
                dispatch(removeFromWishlist(currentId[0].id))
                console.log(currentId)
                console.log('hello')
            }
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
                    PLEASE SELECT A SIZE
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
                            {selected ? selectedButton() : <button className="select-size" onClick={null}>SELECT SIZE</button>}
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