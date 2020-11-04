import React from 'react';
import { useDispatch } from 'react-redux';
// import { addItem } from '../actions'
import Item from './Item';
// import { v4 as uuidv4 } from 'uuid';

const List = () => {
    const dispatch = useDispatch();

    const items = [
        {
            name: 'Shirt',
            price: 10
        },
        {
            name: 'Dress',
            price: 13
        },
        {
            name: 'Jeans',
            price: 12
        }
    ]

    const itemList = items.map(item => {
        // item.id =  uuidv4();
        // console.log(item.id);

        return (
            <div>
                <Item name={item.name} price={item.price} />
                <br />
            </div>
            
        )
    })

    return ( 
        <div>
            {/* <button onClick={() => dispatch(addItem('Dress'))}>Dress</button>
            <button onClick={() => dispatch(addItem('Shirt'))}>Shirt</button>
            <button onClick={() => dispatch(addItem('Jeans'))}>Jeans</button> */}
            {itemList}
        </div>
    );
}
 
export default List;