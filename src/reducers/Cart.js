const cart = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return (
                [
                    ...state, 
                    {
                        name: action.payload,
                        id: action.id,
                        price: action.price,
                        image: action.image
                    }
                ]
            );
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default cart;