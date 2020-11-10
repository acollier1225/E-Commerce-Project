import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clothes from '../../reducers/Clothes';
import Checkout from '../cart/Checkout';
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
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1252&q=80',
            style: 'MEN',
            type: 'PANTS'
        },
        {
            name: 'Mens\' Sneakers',
            price: 14,
            image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
            style: 'MEN',
            type: 'SHOES'
        },
        {
            name: 'Mens\' Hat',
            price: 7,
            image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            style: 'MEN',
            type: 'MISC'
        },
        {
            name: 'Dress',
            price: 13,
            image: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
            style: 'WOMEN',
            type: 'MISC'
        },
        {
            name: 'Womens\' Shirt',
            price: 16,
            image: 'https://images.unsplash.com/photo-1582551272941-9fc3e8db8bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            style: 'WOMEN',
            type: 'SHIRTS'
        },
        {
            name: 'Heels',
            price: 23,
            image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            style: 'WOMEN',
            type: 'SHOES'
        },
        {
            name: 'Womens\' Jeans',
            price: 12,
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
            style: 'WOMEN',
            type: 'PANTS'
        },
        {
            name: 'Kids\' Shirt',
            price: 9,
            image: 'https://images.unsplash.com/photo-1490168040734-2226e72962f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80',
            style: 'KIDS',
            type: 'SHIRTS'
        },
        {
            name: 'Kids\' Pants',
            price: 11,
            image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            style: 'KIDS',
            type: 'PANTS'
        },
        {
            name: 'Kids\' Beanie',
            price: 5,
            image: 'https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            style: 'KIDS',
            type: 'MISC'
        },
        {
            name: 'Kids\' Shoes',
            price: 12,
            image: 'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
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