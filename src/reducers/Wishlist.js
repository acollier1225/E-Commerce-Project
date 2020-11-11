const wishlist = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WISHLIST':
            return (
                [
                    ...state,
                    {
                        name: action.name,
                        id: action.id,
                        price: action.price,
                        image: action.image
                    }
                ]
            )
        case 'REMOVE_WISHLIST':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default wishlist;