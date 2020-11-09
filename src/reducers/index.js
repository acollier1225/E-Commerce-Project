import cart from './Cart';
import total from './Total';
import visibleMenu from './VisibleMenu';
import clothes from './Clothes';
import tab from './Tab';
import details from './Details';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    cart,
    total,
    visibleMenu,
    clothes,
    tab,
    details
})

export default reducers;