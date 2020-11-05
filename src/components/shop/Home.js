import React from 'react';
import './Home.css';

const HomePage = () => {
    return ( 
        <div>
            <div className="collection">
                <span id="collection">Our Fall Collection is Here</span>
            </div>
            <img src="https://images.unsplash.com/photo-1455638083472-fc88b499dc78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" id="snow" />
            <img src="https://images.unsplash.com/photo-1590080437884-49f76129c459?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" id="sweater" />
        </div>
     );
}
 
export default HomePage;