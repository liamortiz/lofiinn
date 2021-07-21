import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>  (
    <nav id="navigation">
        <NavLink to="/" exact>Home</NavLink>
    </nav>
)
export default Header;