import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenu, changeClothes, selectTab } from '../../../actions';
import './Submenu.css';

const Submenu = (props) => {
    const clothesMenu = useSelector(state => state.clothes)
    const dispatch = useDispatch();

    const menuChange = (option) => {
        dispatch(changeMenu(props.style))
        dispatch(changeClothes(option))
        selectTab(props.style)
    }


    const clothes = ['Shirts', 'Pants', 'Shoes', 'Misc']
    const clothesList = clothes.map(option => {
        return <li key={option} onClick={() => menuChange(option)}>{option}</li>
    })

    return ( 
        <div>
            <ul id="clothes-list">
                <li onClick={() => menuChange('ALL')}>{props.style}</li>
                {clothesList}
            </ul>
        </div>
     );
}
 
export default Submenu;