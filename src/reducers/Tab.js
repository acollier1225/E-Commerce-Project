const tab = (state = 'HOME', action) => {
    switch(action.type) {
        case 'HOME':
            return state = 'HOME'
        case 'MEN':
            return state = 'MEN'
        case 'WOMEN':
            return state = 'WOMEN'
        case 'KIDS':
            return state = 'KIDS'
        case 'WISHLIST':
            return state = 'WISHLIST'
        default:
            return state
    }
}

export default tab;