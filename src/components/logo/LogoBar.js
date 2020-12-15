import React from 'react';
import './LogoBar.css';
import { changeMenu } from '../../actions';
import { useDispatch } from 'react-redux';

const LogoBar = () => {
    const dispatch = useDispatch();

    const home = () => {
        dispatch(changeMenu('HOME'))
    }

    return (
        <div className="logo-bar"><span id="logo" onClick={() => home()}>Arco</span></div>
    )
}

export default LogoBar;