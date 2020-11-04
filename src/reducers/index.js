import cart from './Cart';
import total from './Total';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    cart,
    total
})

export default reducers;