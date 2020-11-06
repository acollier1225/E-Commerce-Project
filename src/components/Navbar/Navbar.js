import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenu } from '../../actions';
import ShoppingCart from '../cart/ShoppingCart';
import Submenu from '../shop/submenu/Submenu';
import Total from '../Total';
import '../cart/ShoppingCart.css';
import './Navbar.css';


const Navbar = () => {
    const [list, showList] = useState(false);
    const [selectedTab, selectTab] = useState('HOME');
    const [showing, showMenu] = useState(false);
    const [hoveredTab, hoverTab] = useState(null);

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const ref = useRef();

    const navs = ['HOME', 'MEN', 'WOMEN', 'KIDS'];

    const changeTab = (tab) => {
        dispatch(changeMenu(tab));
        selectTab(tab);
    }

    const tab = (nav) => {
        return (selectedTab !== null && selectedTab === nav) || hoveredTab === nav ? "selected" : null
    }

    const navList = navs.map(nav => {
        return <li 
            onMouseOver={() => hover(nav)} 
            key={nav} 
            onClick={() => changeTab(nav)} 
            className={tab(nav)}>{nav}
        </li>
    });

    const hover = (nav) => {
        hoverTab(nav);
        showMenu(true);
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
            {showing ? <div id="submenu"><Submenu onMouseOver={() => hover(hoveredTab)}></Submenu></div> : null}
        </div>
        
    );
}
 
export default Navbar;