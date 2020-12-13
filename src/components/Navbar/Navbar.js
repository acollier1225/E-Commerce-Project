import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenu, changeClothes, selectTab, changeDetails } from '../../actions';
import ShoppingCart from '../cart/ShoppingCart';
import Submenu from '../shop/submenu/Submenu';
import '../cart/ShoppingCart.css';
import './Navbar.css';
import wishlist from '../../reducers/Wishlist';
import GoogleAuth from '../GoogleAuth';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import { propTypes } from 'react-addons-css-transition-group';

const Navbar = (props) => {
    const [list, showList] = useState(false);
    const [showing, showMenu] = useState(false);
    const [hoveredTab, hoverTab] = useState(null);

    const cart = useSelector(state => state.cart);
    const selectedTab = useSelector(state => state.tab);
    const wishlist = useSelector(state => state.wishlist);

    const dispatch = useDispatch();
    const ref = useRef();

    const navs = ['HOME', 'MEN', 'WOMEN', 'KIDS', 'WISHLIST'];

    const changeTab = (tab) => {
        dispatch(changeDetails())
        dispatch(changeClothes('ALL'));
        dispatch(changeMenu(tab));
        selectTab(tab);
    }

    const tab = (nav) => {
        return (selectedTab === nav) || hoveredTab === nav ? "navItem selected-style" : "navItem"
    }

    const navList = navs.map(nav => {
        if (nav === 'WISHLIST') {
            return <li className="navItem wishlist"
                onMouseOver={() => hover(nav)} 
                key={nav} 
                onClick={() => changeTab(nav)} 
                >
                    {nav} ({wishlist.length})
            </li>
        }
        return <li 
            onMouseOver={() => hover(nav)} 
            key={nav} 
            onClick={() => changeTab(nav)} 
            className={tab(nav)}>
                {nav}               {nav !== 'HOME' ? <i className="fas fa-angle-down"></i> : null}
        </li>
    });

    const hover = (nav) => {
        if (nav !== 'HOME' && nav !== 'WISHLIST') {
            hoverTab(nav);
            showMenu(true);
        }

        if (nav === 'HOME') {
            showMenu(false);
        }
    }

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

    useEffect(() => {
        const onBodyHover = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
    
            showMenu(false);
            hoverTab(null);
        };

        document.body.addEventListener('mouseover', onBodyHover);

        return () => {
            document.body.removeEventListener('mouseover', onBodyHover);
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
                    <li className="toggleButtonLi">
                        <DrawerToggleButton drawerClickHandler={props.drawerClickHandler} />
                    </li>
                    <div>
                        {navList}
                    </div>
                    <div className="total">
                    <li className="total">
                        <div onClick={showCart} className="total">
                        <i className="fas fa-shopping-bag"></i>
                        {cart.length > 0 ? <span className="number">
                                {cart.length}
                            </span> : null}
                        </div>
                        <div 
                        className="shoppingCart">
                            { list  ? <ShoppingCart /> : null }
                        </div>
                    </li>
                    </div>
                    <li id="google-auth"><GoogleAuth /></li>
                </ul>
            </nav> 
            {showing ? <div id="submenu"><Submenu style={hoveredTab} onMouseOver={() => hover(hoveredTab)}></Submenu></div> : null}
        </div>
        
    );
}
 
export default Navbar;