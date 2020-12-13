import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from './shop/List';
import Navbar from './Navbar/Navbar';
import './App.css'
import LogoBar from './logo/LogoBar';
import Details from './shop/Details';
import SideDrawer from './Navbar/SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
//client id
// 606057264639-dao4p8qvr5fqu3uut4pdtarrqsh84gvq.apps.googleusercontent.com

const App = () => {
    const cart = useSelector(state => state.cart)
    const [sideDrawerOpen, openSideDrawer] = useState(false);

    const sideDrawerClickHandler = () => {
        openSideDrawer(!sideDrawerOpen);
        console.log('clicked')
    }
    
 
    return ( 
        <div>
            <LogoBar />
            {sideDrawerOpen ? <SideDrawer drawerClickHandler={sideDrawerClickHandler} /> : null}
            {sideDrawerOpen ? <Backdrop drawerClickHandler={sideDrawerClickHandler} /> : null}
            <div className="app">
                <Navbar drawerClickHandler={sideDrawerClickHandler} />
                <Details />
                <List />
            </div>
        </div>
        
        );
}
 
export default App;