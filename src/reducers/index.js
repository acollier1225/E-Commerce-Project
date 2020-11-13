import cart from './Cart';
import total from './Total';
import visibleMenu from './VisibleMenu';
import clothes from './Clothes';
import tab from './Tab';
import details from './Details';
import wishlist from './Wishlist';
import authReducer from './Google';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    cart,
    total,
    visibleMenu,
    clothes,
    tab,
    details,
    wishlist,
    auth: authReducer
})

export default reducers;