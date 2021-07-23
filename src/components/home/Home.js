import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ChatContainer from '../chat/ChatContainer';
import './style.scss';

const Home = () => (
        <div data-testid="home-wrapper" id="home-wrapper">
            <ChatContainer/>
        </div>
);
export default Home;
