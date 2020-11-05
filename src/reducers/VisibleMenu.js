const visibleMenu = (state = 'MEN', action) => {
    switch(action.type) {
        case 'MEN':
            return state = 'MEN'
        case 'WOMEN':
            return state = 'WOMEN'
        case 'KIDS':
            return state = 'KIDS'
        default:
            return state
    }
}

export default visibleMenu;