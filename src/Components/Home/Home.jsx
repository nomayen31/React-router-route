import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is the home Components</h2>
            <Outlet></Outlet>
            <h2>Home Footer </h2>
        </div>
    );
};

export default Home;