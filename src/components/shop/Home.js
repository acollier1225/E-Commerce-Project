import React from 'react';
import './Home.css';

const HomePage = () => {
    return ( 
        <div>
            <div className="collection">
                <span id="collection">Our Fall Collection is Here</span>
            </div>
            <div className="pictures">
                <img src="https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" id="snow" />
                <img src="https://images.unsplash.com/photo-1604945964942-83d4d3e92a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" id="sweater" />
                <img id="jacket" src="https://images.unsplash.com/photo-1584180609596-f2459933aa4c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80" />
            </div>
        </div>
     );
}
 
export default HomePage;