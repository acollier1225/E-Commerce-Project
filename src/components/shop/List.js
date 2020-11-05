import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import './List.css';

const List = (props) => {
    const dispatch = useDispatch();

    const visibleMenu = useSelector(state => state.visibleMenu)

    const items = [
        {
            name: 'Shirt',
            price: 10,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
            style: 'MEN'

        },
        {
            name: 'Tee Shirt',
            price: 10,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
            style: 'MEN'
        },
        {
            name: 'Dress',
            price: 13,
            image: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
            style: 'WOMEN'
        },
        {
            name: 'Jeans',
            price: 12,
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
            style: 'KIDS'
        }

    ]

    // const itemList = items.map(item => {
    
    const newList = items.filter(item => item.style === visibleMenu)
    const itemList = newList.map(item => {
        
        return (
            <div 
                className="item" 
                key={item.name}>
                    <Item 
                        name={item.name} 
                        price={item.price} 
                        image={item.image} 
                    />
                    <br />
            </div>
            
        )
    })

    return ( 
        <div>
            {itemList}
        </div>
    );
}
 
export default List;