import React from 'react';
import {NavLink} from 'react-router-dom';
import './_common.scss';

const Header = () =>  (
    <nav id="navigation">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/" exact>Stream</NavLink>
        <NavLink to="/" exact>Lofi Art</NavLink>
        <NavLink to="/" exact>Articles</NavLink>
        <NavLink to="/" exact>xiiPanda</NavLink>
    </nav>
)
export default Header;