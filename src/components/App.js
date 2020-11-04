import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../actions'
import { v4 as uuidv4} from 'uuid';
import List from './shop/List'
import ShoppingCart from './cart/ShoppingCart';
import Total from './Total';

const App = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart)
 
    return ( 
        <div>
            <List />
            <ShoppingCart />
            <Total />
        </div>
        );
}
 
export default App;