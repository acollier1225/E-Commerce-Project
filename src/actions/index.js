import { v4 as uuidv4 } from 'uuid';

export const addItem = (name, price, image, size, quantity, style) => {
    return {
        type: 'ADD_ITEM',
        payload: name,
        id: uuidv4(),
        price: price,
        image: image,
        size: size,
        quantity: quantity,
        style: style
    }
}

export const removeItem = (id, price) => {
    return {
        type: 'REMOVE_ITEM',
        id: id,
        price: price
    }
}

export const changeMenu = (menu) => {
    return {
        type: menu
    }
}

export const changeClothes = (clothes) => {
    return {
        type: clothes
    }
}

export const selectTab = (tab) => {
    return {
        type: tab
    }
}

export const increaseQuantity = (price) => {
    return {
        type: 'INCREASE_QUANTITY',
        price: price
    }
}

export const decreaseQuantity = (price) => {
    return {
        type: 'DECREASE_QUANTITY',
        price: price
    }
}

export const changeDetails = (name, price, image, style, category) => {
    return {
        type: 'CHANGE_ITEM',
        name: name,
        price: price,
        image: image,
        style: style,
        category: category
    }
}

export const addToWishlist = (name, price, image, style, category) => {
    return {
        type: 'ADD_WISHLIST',
        name: name,
        price: price,
        image: image,
        id: uuidv4(),
        style: style,
        category: category
    }
}

export const removeFromWishlist = (id) => {
    return {
        type: 'REMOVE_WISHLIST',
        id: id
    }
}

export const signIn = userId => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}