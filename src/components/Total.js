import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
    const total = useSelector(state => state.total);

    return ( 

        <div>
            {total}
        </div>
     );
}
 
export default Total;