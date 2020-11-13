import React from 'react';
import { useSelector } from 'react-redux';
import List from './shop/List';
import Navbar from './Navbar/Navbar';
import './App.css'
import LogoBar from './logo/LogoBar';
import Details from './shop/Details';
//client id
// 606057264639-dao4p8qvr5fqu3uut4pdtarrqsh84gvq.apps.googleusercontent.com

const App = () => {
    const cart = useSelector(state => state.cart)
    
 
    return ( 
        <div>
            <LogoBar />
            <div className="app">
                <Navbar />
                <Details />
                <List />
            </div>
        </div>
        
        );
}
 
export default App;