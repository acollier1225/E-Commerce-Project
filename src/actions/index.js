import { v4 as uuidv4 } from 'uuid';

export const addItem = (name, price, image, size, quantity) => {
    return {
        type: 'ADD_ITEM',
        payload: name,
        id: uuidv4(),
        price: price,
        image: image,
        size: size,
        quantity: quantity
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