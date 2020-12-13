import React from 'react';

const drawerToggleButton = props => (
    <button onClick={props.drawerClickHandler} className="toggleButton">
        <div className="toggleButtonLine" />
        <div className="toggleButtonLine" />
        <div className="toggleButtonLine" />
    </button>
)

export default drawerToggleButton;