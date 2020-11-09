import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, increaseQuantity } from '../../actions';
import './Details.css';

const Details = () => {
    const details = useSelector(state => state.details)

    const cart = useSelector(state => state.cart)
    const [selected, selectSize] = useState(null);
    const [quantity, changeQuantity] = useState(1)
    const dispatch = useDispatch();
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    let current;

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
        current = cart.filter(item => item.name === details[0].name && item.size === selected);
        if (current.length > 0) {
            cart.map(item => {
                if (item.name === details[0].name && item.size === selected) {
                    dispatch(increaseQuantity(item.price * quantity));
                    item.quantity += quantity;
                }
            })
            selectSize(null);
        } else {
            dispatch(addItem(details[0].name, details[0].price, details[0].image, selected, quantity));
            selectSize(null);
        }
        current = null;  
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
                <button onClick={() => decrement()}>-</button>
                        <div id="quantity">{quantity}</div>
                    <button onClick={() => increment()}>+</button>
                <br />
                <div className="detail-add">{selected !== null ? <button id="detail-add-button"
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