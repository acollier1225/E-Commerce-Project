const details = (state = [], action) => {
    switch(action.type) {
        case 'CHANGE_ITEM':
            return state = [
                {name: action.name,
                price: action.price,
                image: action.image}
            ]
        default:
            return state = []
    }
}

export default details;