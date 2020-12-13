import React from 'react';
import "./Backdrop.css";

const Backdrop = props => (
    <div onClick={props.drawerClickHandler} className="backdrop" />
)
 
export default Backdrop;