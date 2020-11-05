import { v4 as uuidv4 } from 'uuid';

export const addItem = (name, price, image, size) => {
    return {
        type: 'ADD_ITEM',
        payload: name,
        id: uuidv4(),
        price: price,
        image: image,
        size: size
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
        type: menu,
    }
}