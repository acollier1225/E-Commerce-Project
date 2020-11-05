import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCart from '../cart/ShoppingCart';
import { changeMenu } from '../../actions'
import '../cart/ShoppingCart.css'
import Total from '../Total';
import './Navbar.css';

const Navbar = () => {
    const [list, showList] = useState(false);
    const [selectedTab, selectTab] = useState('HOME');
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const ref = useRef();

    const navs = ['HOME', 'MEN', 'WOMEN', 'KIDS'];

    const changeTab = (tab) => {
        dispatch(changeMenu(tab));
        selectTab(tab);
    }

    const tab = (nav) => {
        return selectedTab !== null && selectedTab === nav ? "selected" : null
    }

    const navList = navs.map(nav => {
        return <li key={nav} onClick={() => changeTab(nav)} className={tab(nav)}>{nav}</li>
    })

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
                    {/* <li className="logo" onClick={() => dispatch(changeMenu('HOME'))}>
                        Style<span>Out</span>
                    </li> */}
                    {navList}
                    <li className="total">
                        <Total />
                    </li>
                    <li className="total">
                        <div onClick={showCart} className="total">
                        <i className="fas fa-shopping-bag"></i>
                        {cart.length > 0 ? <span className="number">
                                {cart.length}
                        
                            
                            </span> : null}
                        </div>
                        <div className="shoppingCart">
                            { list  ? <ShoppingCart /> : null }
                        </div>
                    </li>
                </ul>
            </nav> 
        </div>
        
    );
}
 
export default Navbar;