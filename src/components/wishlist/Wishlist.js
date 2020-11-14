import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from '../shop/Item';
import { fetchWishlist } from '../../actions/index';
import './Wishlist.css'

const Wishlist = () => {
    const list = useSelector(state => state.wishlist)
    const renderedList = list.length === 0 ? <div>There are currently no items in your wishlist</div> : list.map(item => {
        return (
            <li className="wishlist-li">
                <Item
                        name={item.name} 
                        price={item.price} 
                        image={item.image} 
                        type={item.style}
                        style={item.category}
                    />
            </li>
        )
    })

    return ( 
        <div className="wishlist-page">
            <ul>
                {renderedList}
            </ul>
        </div>
     );
}
 
export default Wishlist;