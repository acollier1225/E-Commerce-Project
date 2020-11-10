import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
    const total = useSelector(state => state.total);

    return ( 

        <div>
            Total: ${total}.00
        </div>
     );
}
 
export default Total;