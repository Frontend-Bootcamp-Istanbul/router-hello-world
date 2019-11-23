import React from 'react';
import './App.scss';
import {Route, Switch, Redirect} from "react-router-dom";


function HomePage(props) {
    console.log(props);
    const loggedInView = <h1>
        Burası HomePage
    </h1>;
    const loggedOutView = <Redirect to="/login" />;
    return (
        <div>
            {
                !props.isLoggedIn ? loggedInView : loggedOutView
            }
        </div>
    );
}

export default HomePage;
