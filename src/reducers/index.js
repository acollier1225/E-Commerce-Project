import cart from './Cart';
import total from './Total';
import visibleMenu from './VisibleMenu';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    cart,
    total,
    visibleMenu
})

export default reducers;