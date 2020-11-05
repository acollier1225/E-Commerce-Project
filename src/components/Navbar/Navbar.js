import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCart from '../cart/ShoppingCart';
import { changeMenu } from '../../actions'
import '../cart/ShoppingCart.css'
import Total from '../Total';
import './Navbar.css';

const Navbar = () => {
    const [list, showList] = useState(false);
    const [selected, selectTab] = useState(false);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
    
            showList(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const showCart = () => {
        if (cart.length > 0) {
            showList(!list);
        } else {
            <div>Hello</div>
        }
    }


    return ( 
        <div ref={ref}>
            <nav>
                <ul>
                    <li className="logo">
                        Style<span>Out</span>
                    </li>
                    <li onClick={() => dispatch(changeMenu('MEN'))}>MEN</li>
                    <li onClick={() => dispatch(changeMenu('WOMEN'))}>WOMEN</li>
                    <li onClick={() => dispatch(changeMenu('KIDS'))}>KIDS</li>
                    <li className="total">
                        <Total />
                    </li>
                    <li onClick={showCart} className="total">
                    <i className="fas fa-shopping-bag"></i>
                        <div className="shoppingCart">
                            { list  ? <ShoppingCart /> : null }
                        </div>
                        {cart.length > 0 ? <span className="number">
                            {cart.length}
                        </span> : null}
                        
                    </li>
                </ul>
            </nav> 
        </div>
        
    );
}
 
export default Navbar;