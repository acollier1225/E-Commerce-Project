import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clothes from '../../reducers/Clothes';
import Checkout from '../cart/Checkout';
import Wishlist from '../wishlist/Wishlist';
import HomePage from './Home';
import Item from './Item';
import './List.css';

const List = (props) => {
    const dispatch = useDispatch();
    const visibleMenu = useSelector(state => state.visibleMenu)
    const clothesMenu = useSelector(state => state.clothes)
    

    const items = [
        {
            name: 'Mens\' Shirt',
            price: 10,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
            style: 'MEN',
            type: 'SHIRTS'

        },
        {
            name: 'Mens\' Jeans',
            price: 15,
            image: 'https://images.unsplash.com/photo-1599030337145-5bec28bee393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            style: 'MEN',
            type: 'PANTS'
        },
        {
            name: 'Mens\' Sneakers',
            price: 14,
            image: 'https://images.unsplash.com/photo-1581327512014-619407b6a116?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1058&q=80',
            style: 'MEN',
            type: 'SHOES'
        },
        {
            name: 'Mens\' Hat',
            price: 7,
            image: 'https://images.unsplash.com/photo-1561814648-28c884af83c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            style: 'MEN',
            type: 'MISC'
        },
        {
            name: 'Womens\' Hat',
            price: 13,
            image: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            style: 'WOMEN',
            type: 'MISC'
        },
        {
            name: 'Womens\' Shirt',
            price: 16,
            image: 'https://images.unsplash.com/photo-1582623081729-4b43c8956085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1034&q=80',
            style: 'WOMEN',
            type: 'SHIRTS'
        },
        {
            name: 'Womens\' Shoes',
            price: 23,
            image: 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            style: 'WOMEN',
            type: 'SHOES'
        },
        {
            name: 'Womens\' Jeans',
            price: 12,
            image: 'https://images.unsplash.com/photo-1582992632570-13300b2ecc31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            style: 'WOMEN',
            type: 'PANTS'
        },
        {
            name: 'Kids\' Shirt',
            price: 9,
            image: 'https://images.unsplash.com/photo-1558424871-c0cc31dea15d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=986&q=80',
            style: 'KIDS',
            type: 'SHIRTS'
        },
        {
            name: 'Kids\' Pants',
            price: 11,
            image: 'https://images.unsplash.com/photo-1591425346752-0ee80bcca4da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            style: 'KIDS',
            type: 'PANTS'
        },
        {
            name: 'Kids\' Beanie',
            price: 5,
            image: 'https://images.unsplash.com/photo-1576529598261-96e376f6aabb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            style: 'KIDS',
            type: 'MISC'
        },
        {
            name: 'Kids\' Shoes',
            price: 12,
            image: 'https://images.unsplash.com/photo-1591142204497-eae224609ff8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80',
            style: 'KIDS',
            type: 'SHOES'
        }

    ]
    
    if (visibleMenu === 'HOME') {
        return <HomePage />
    }
    if (visibleMenu === 'CHECKOUT') {
        return <Checkout />
    }
    if (visibleMenu === 'WISHLIST') {
        return <Wishlist />
    }
    const newList = items.filter(item => item.style === visibleMenu)
    const itemList = newList.map(item => {
    if (clothesMenu === 'ALL' || clothesMenu === item.type) {
        return (
            <div 
                className="item" 
                key={item.name}>
                    <Item 
                        name={item.name} 
                        price={item.price} 
                        image={item.image} 
                        type={item.type}
                        style={item.style}
                    />
                    <br />
            </div>
        )}
    })

    return ( 
        <div>
            {itemList}
        </div>
    );
}
 
export default List;