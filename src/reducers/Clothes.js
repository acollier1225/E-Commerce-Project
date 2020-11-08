const clothes = (state = 'ALL', action) => {
    switch (action.type) {
        case 'ALL':
            return state = 'ALL';
        case 'SHIRTS':
            return state = 'SHIRTS';
        case 'PANTS':
            return state = 'PANTS';
        case 'SHOES':
            return state = 'SHOES';
        case 'MISC':
            return state = 'MISC';
        default:
            return state
    }
}

export default clothes;