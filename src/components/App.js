import React from 'react';
import { useSelector } from 'react-redux';
import List from './shop/List';
import Navbar from './Navbar/Navbar';
import './App.css'

const App = () => {
    const cart = useSelector(state => state.cart)
    
 
    return ( 
        <div>
            <Navbar />
            <List />
        </div>
        );
}
 
export default App;