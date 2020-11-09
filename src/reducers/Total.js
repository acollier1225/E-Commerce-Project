const total = (state = 0, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return state + (action.price * action.quantity)
        case 'REMOVE_ITEM':
            return state - action.price
        case 'INCREASE_QUANTITY':
            return state + action.price
        case 'DECREASE_QUANTITY':
            return state - action.price
        default: 
            return state 
    }
}

export default total;