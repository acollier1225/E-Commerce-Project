import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenu, changeClothes, selectTab, changeDetails } from '../../../actions';
import ShoppingCart from '../../cart/ShoppingCart';
import Submenu from '../../shop/submenu/Submenu';
import '../../cart/ShoppingCart.css';
import '../Navbar.css';
import wishlist from '../../../reducers/Wishlist';
import GoogleAuth from '../../GoogleAuth';
import DrawerToggleButton from './DrawerToggleButton';
import "./SideDrawer.css"
import { propTypes } from 'react-addons-css-transition-group';

const SideDrawer = (props) => {

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
        props.drawerClickHandler();
    }

    const checkOut = () => {
        dispatch(changeMenu('CHECKOUT'));
        props.drawerClickHandler();
    }

    const tab = (nav) => {
        return (selectedTab === nav) || hoveredTab === nav ? "selected-style" : null
    }

    const navList = navs.map(nav => {
        if (nav === 'WISHLIST') {
            return <li className="wishlist"
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
                {nav}
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

    // useEffect(() => {
    //     const onBodyClick = (event) => {
    //         if (ref.current.contains(event.target)) {
    //             return;
    //         }
    
    //         showList(false);
    //     };

    //     document.body.addEventListener('click', onBodyClick);

    //     return () => {
    //         document.body.removeEventListener('click', onBodyClick);
    //     };
    // }, []);

    // useEffect(() => {
    //     const onBodyHover = (event) => {
    //         if (ref.current.contains(event.target)) {
    //             return;
    //         }
    
    //         showMenu(false);
    //         hoverTab(null);
    //     };

    //     document.body.addEventListener('mouseover', onBodyHover);

    //     return () => {
    //         document.body.removeEventListener('mouseover', onBodyHover);
    //     };
    // }, []);


    return (
        <div ref={ref}>
            <nav className="sideDrawer">
                <ul>
                    {/* <div> */}
                        {navList}
                    {/* </div> */}
                    <div>
                    <li id="sideDrawerTotal">
                        <li onClick={checkOut} className="sideDrawerTotal">
                        <i className="fas fa-shopping-bag"></i>
                        {cart.length > 0 ? <span className="number">
                                {cart.length}
                            </span> : null}
                        </li>
                        <div 
                        className="shoppingCart">
                            { list  ? <ShoppingCart /> : null }
                        </div>
                    </li>
                    </div>
                    <li id="google-auth"><GoogleAuth /></li>
                </ul>
            </nav>
        </div>
    )
};

 
export default SideDrawer;