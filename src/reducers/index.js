import cart from './Cart';
import total from './Total';
import visibleMenu from './VisibleMenu';
import clothes from './Clothes';
import tab from './Tab';
import quantity from './Quantity';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    cart,
    total,
    visibleMenu,
    clothes,
    tab,
    quantity
})

export default reducers;