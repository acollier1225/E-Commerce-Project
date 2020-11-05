import React from 'react';
import { useSelector } from 'react-redux';
import List from './shop/List';
import Navbar from './Navbar/Navbar';
import './App.css'
import LogoBar from './logo/LogoBar';

const App = () => {
    const cart = useSelector(state => state.cart)
    
 
    return ( 
        <div>
            <LogoBar />
            <div className="app">
                
                <Navbar />
                <List />
            </div>
        </div>
        
        );
}
 
export default App;