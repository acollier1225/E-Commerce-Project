const clothes = (state = 'ALL', action) => {
    switch (action.type) {
        case 'ALL':
            return state = 'ALL';
        case 'Shirts':
            return state = 'Shirts';
        case 'Pants':
            return state = 'Pants';
        case 'Shoes':
            return state = 'Shoes';
        case 'Misc':
            return state = 'Misc';
        default:
            return state
    }
}

export default clothes;