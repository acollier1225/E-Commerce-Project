import React from 'react';
import './Submenu.css';

const Submenu = (props) => {
    const clothes = ['Shirts', 'Pants', 'Shoes', 'Misc']
    const clothesList = clothes.map(option => {
        return <li><a href="localhost:3000">{option}</a></li>
    })

    return ( 
        <div>
            <ul id="clothes-list">
                {clothesList}
            </ul>
        </div>
     );
}
 
export default Submenu;