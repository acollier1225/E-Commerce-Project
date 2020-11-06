import cart from './Cart';
import total from './Total';
import visibleMenu from './VisibleMenu';
import clothes from './Clothes';
import tab from './Tab';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    cart,
    total,
    visibleMenu,
    clothes,
    tab
})

export default reducers;