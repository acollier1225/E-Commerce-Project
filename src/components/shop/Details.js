import React, { useState, useEffect } from 'react';
import { propTypes } from 'react-addons-css-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, increaseQuantity, removeFromWishlist } from '../../actions';
import './Details.css';

const Details = () => {
    const details = useSelector(state => state.details)
    const cart = useSelector(state => state.cart)
    const wishlist = useSelector(state => state.wishlist)
    const [selected, selectSize] = useState(null);
    const [quantity, changeQuantity] = useState(1)
    const dispatch = useDispatch();
    // let current = cart.filter(item => item.name === details[0].name && item.size === selected);
    let sizes;

    console.log(details)
    if (details[0] == undefined) {
        sizes = []
    } else if (details[0].style === 'SHOES' && details[0].category === 'MEN') {
        sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10']
    } else if (details[0].style === 'SHOES' && details[0].category === 'WOMEN') {
        sizes = ['5', '5.5', '6', '6.5', '7', '7.5', '8']
    } else if (details[0].type === 'SHOES' && details[0].category === 'KIDS') {
        sizes = ['3.5', '4', '4.5', '5', '5.5', '6']
    } else if (details[0].style === 'MISC') {
        sizes = []
    } else if(details[0].style === 'PANTS' && details[0].category === 'WOMEN') {
        sizes = ['0', '1', '2', '3', '4', '5']
    } else if(details[0].style === 'PANTS' && details[0].category === 'MEN') {
        sizes = ['28', '29', '30', '31', '32', '33']
    } else if (details[0].style === 'PANTS' && details[0].category === 'KIDS') {
        sizes = ['22', '23', '24', '25', '26', '27']
    } else {
        sizes = ['XS', 'S', 'M', 'L', 'XL']
    }

    useEffect(() => {
        selectSize(null);
        changeQuantity(1)
    }, [details])

    const changeSize = (size) => {
        selectSize(size);
    }

    const decrement = () => {
        if (quantity > 1) {
            changeQuantity(quantity - 1)
        }
    }

    const increment = () => {
        changeQuantity(quantity + 1)
    }

    const addToCart = () => {
        let current = cart.filter(item => item.name === details[0].name && item.size === selected);
        if (current.length > 0) {
            cart.map(item => {
                if (item.name === details[0].name && item.size === selected) {
                    dispatch(increaseQuantity(item.price * quantity));
                    item.quantity += quantity;
                }
            })
            selectSize(null);
        } else {
            dispatch(addItem(details[0].name, details[0].price, details[0].image, selected, quantity, details[0].style));
            selectSize(null);
        }
        current = null;  
        let currentId = wishlist.filter(item => item.name === details[0].name )
            if (currentId.length > 0) {
                dispatch(removeFromWishlist(currentId[0].id))
                console.log(currentId)
                console.log('hello')
            }
    }

    const sizeList = sizes.map(size => {
        return <li key={size} onClick={() => changeSize(size)} className={selected === size ? 'detail-square selected' : 'detail-square'} size={size} >{size}</li>
    })

    const detailsList = details[0] == {undefined, undefined, undefined} || details.length === 0 ? <div></div> : (
        <div className="detail">
            <img src={details[0].image} />
            <span>
                <strong>{details[0].name}</strong>
                <br />
                ${details[0].price}.00
                <br />
                <span className="sizes" id="details-sizes">{sizeList}</span>
                <br />
                <span id="change-quantity">
                <button onClick={() => decrement()}>-</button>
                        <div id="quantity">{quantity}</div>
                    <button onClick={() => increment()}>+</button>
                </span>
                <br />
                <div className="detail-add">{selected !== null || details[0].style === 'MISC' ? <button id="detail-add-button"
                    onClick={() => addToCart()}
                >ADD TO CART</button> : <button id="detail-add-button">PLEASE SELECT A SIZE</button>}</div>
            </span>
        </div>
    )

    return ( 
        <div>
            {detailsList}
        </div>
     );
}
 
export default Details;