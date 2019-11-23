import React from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";


function OtherPage(props) {
    console.log(props);
    return (
        <h1>
            Burası Other Page
        </h1>
    );
}

export default OtherPage;
