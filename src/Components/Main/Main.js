import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <Home></Home>
        </Router>
    );
};

export default Main;