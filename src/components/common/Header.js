import React from 'react';
import {NavLink} from 'react-router-dom';
import './_common.scss';

import userProfileIcon from '../../assets/panda.jpg';

const userDetails = {
  username: 'xiiPanda',
  icon: userProfileIcon
}

const Header = () =>  (
    <nav id="navigation">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/stream">Stream</NavLink>
        <NavLink to="/art">Lofi Art</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink className="right-tabs upload" to="/upload">Upload</NavLink>

        <div id="user-account-tab">
            <img src={userDetails.icon} alt=""/>
            <NavLink className="right-tabs account-tab" to="/account">{userDetails.username}</NavLink>
        </div>
        
    </nav>
)
export default Header;