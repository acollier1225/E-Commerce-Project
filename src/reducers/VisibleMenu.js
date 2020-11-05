const visibleMenu = (state = 'HOME', action) => {
    switch(action.type) {
        case 'HOME':
            return state = 'HOME'
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