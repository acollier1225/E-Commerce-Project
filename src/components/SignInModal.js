import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity, removeFromWishlist } from '../actions';
// import './SizeModal.css';

const SignInModal = (props) => {

    const cancelButton = () => {
        {props.onClose()};
    }


    if( !props.show ) {
        return null;
    } else {
        return (
            <div className="modal signin">
                <div className="modal-content-signin">
                        You must be signed in to add to your wishlist
                        <br />
                        <button onClick={() => cancelButton()}>CLOSE</button>
                </div>
            </div>
        )
    }
}
 
export default SignInModal;